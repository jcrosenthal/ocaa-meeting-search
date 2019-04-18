import moment from 'moment';
import {
  groups,
  meetings as allMeetings,
  days,
  formats
} from '../../resources';

export class MeetingListController {
  constructor($filter) {
    'ngInject';

    this.$filter = $filter;
    this.allMeetings = allMeetings;
    this.groups = groups;
  }

  $onInit() {

    // console.log(groups, days, formats);

    const _this = this;

    Object.assign(this, {
      days,
      formats,
      myPage: 1,
      myLimit: 10,
      query: {
        order: 'name',
        limit: this.sortedFilteredMeetings().length,
        page: 1
      },
      selected: [],
      filterBy: {},
      meetings: []
    });

    this.limitOptions = [15, 25, 50, {
      label: 'All',
      value: function () {
        return _this.meetings ? _this.meetings.length : 0;
      }
    }];

    this.setMeetings();
  }

  formatFormats(formats) {
    return formats.map(format => this.findFormatDisplay(format));
  }

  findDayDisplay(dayCode) {
    const found = days.find(day => day.code === dayCode.toLowerCase());
    return found && found.display;
  }

  findFormatDisplay(formatCode) {
    const found = formats.find(format => format.code === formatCode);
    return found && found.display;
  }

  setMeetings() {

    // Assign all meetings to their matching groups
    this.groups.forEach(group => group.meetings = this.allMeetings.filter(meeting => meeting.group_id === group.id));

    console.log(this.groups);

    this.meetings = this.groups.map((group) => group.meetings.map(
      meeting => {

        const formatDisplay = meeting.format.map(formatCode => {
          const foundFormat = this.formats.find(format => format.code === formatCode);
          return foundFormat && foundFormat.display || '';
        }).sort().filter(e => e).join(', ');

        const streetAddr = group.address && [
          (group.address.notes ? group.address.notes + ' - ' : ''),
          group.address.street_number,
          group.address.route
        ].filter(e => e).join(' ');

        const location = group.address && [
          streetAddr,
          group.address.locality,
          group.address.administrative_area_level_1,
        ].filter(e => e).join(', ');

        const groupMeeting = Object.assign({}, {
          name: group.name,
          day: meeting.day,
          time: meeting.start,
          fullTime: moment(meeting.start).format('HHmm'),
          town: group.address && group.address.locality,
          formatDisplay,
          format: meeting.format,
          location,
          groupId: group.id,
          isWheelchairAccessible: group.isWheelchairAccessible ? 1 : 0
        });

        return groupMeeting;
      }
    )).reduce((a, b) => a.concat(b));
  }

  resetResults() {
    this.filterBy = {};
    this.setMeetings();
  }

  filterByFormat(meetings, filterBy) {
    if (!filterBy || !filterBy.formats || !filterBy.formats.length) {
      return meetings;
    }

    let filtered = meetings.filter(meeting => meeting.format.find(format => filterBy.formats.includes(format.toLowerCase())));

    return filtered;
  }

  filterByDay(meetings, filterBy) {
    if (!filterBy || !filterBy.days || !filterBy.days.length) {
      return meetings;
    }


    let filtered = meetings.filter(meeting => filterBy.days.includes(meeting.day.toLowerCase()));

    return filtered;
  }

  filterByTime(meetings, filterBy) {
    if (!filterBy || !filterBy.timeRange || filterBy.openClosed === 'any') {
      return meetings;
    }

    const hoursMap = {
      morning: {
        start: 1,
        end: 1159
      },
      afternoon: {
        start: 1200,
        end: 1759
      },
      evening: {
        start: 1800,
        end: 2359
      },
    };

    let filtered = meetings.filter(meeting => {

      const hours = hoursMap[filterBy.timeRange];
      const meetingStart = meeting.fullTime;

      return (meetingStart >= hours.start && meetingStart < hours.end);

    });

    return filtered;
  }

  filterByOpenClosed(meetings, filterBy) {
    if (!filterBy || !filterBy.openClosed || filterBy.openClosed === 'openClosed') {
      return meetings;
    }

    const openMeetingTypes = [
      'o',
      'od',
      'os'
    ];

    let filtered = meetings.filter(meeting => meeting.format.find(format => openMeetingTypes.includes(format.toLowerCase())));

    return filtered;
  }

  filterResults(filterBy) {
    this.setMeetings();

    const allMeetings = this.meetings;

    let filteredByFormat = this.filterByFormat(allMeetings, filterBy);
    // console.log('filteredByFormat', filteredByFormat);

    let filteredByTime = this.filterByTime(filteredByFormat, filterBy);
    // console.log('filteredByTime', filteredByTime);

    let filteredByDay = this.filterByDay(filteredByTime, filterBy);
    // console.log('filteredByDay', filteredByDay);

    let filteredByOpenClosed = this.filterByOpenClosed(filteredByDay, filterBy);
    // console.log('filteredByOpenClosed', filteredByOpenClosed);

    this.meetings = filteredByOpenClosed;
  }

  sortedFilteredMeetings() {

    if (!this.meetings) {
      return [];
    }

    let ordered = this.$filter('orderBy')(this.meetings, this.query.order);

    return ordered;

  }

}

export default MeetingListController;