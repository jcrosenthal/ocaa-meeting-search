import moment from 'moment';
import {
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
    this.$http.get('http://0.0.0.0:3000/api/meetings')
      .then(meetings => {
        this.meetings = meetings;
        console.log(this.meetings);
        this.meetings = this.meetings.map(meeting => {

          const formatDisplay = meeting.format.map(formatCode => {
            const foundFormat = this.formats.find(format => format.code === formatCode);
            return foundFormat && foundFormat.display || '';
          }).sort().filter(e => e).join(', ');

          const streetAddr = group && [
            (group.notes ? group.notes + ' - ' : ''),
            group.street_number,
            group.route
          ].filter(e => e).join(' ');

          const location = group && [
            streetAddr,
            group.locality,
            group.administrative_area_level_1,
          ].filter(e => e).join(', ');

          return Object.assign({}, meeting, {
            time: meeting.start,
            fullTime: moment(meeting.start).format('HHmm'),
            town: group.address && group.address.locality,
            formatDisplay,
            location,
            isWheelchairAccessible: group.isWheelchairAccessible ? 1 : 0
          });
        });

      });

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