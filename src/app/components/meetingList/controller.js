import angular from 'angular';
import moment from 'moment';
import groups from './groups';

export class MeetingListController {
  constructor($filter) {
    'ngInject';

    this.$filter = $filter;
  }

  $onInit() {
    this.selected = [];

    this.query = {
      order: 'name',
      limit: this.sortedFilteredMeetings().length,
      page: 1
    };

    this.myPage = 1;
    this.myLimit = 10;

    const _this = this;

    this.limitOptions = [15, 25, 50, {
      label: 'All',
      value: function () {
        return _this.meetings ? _this.meetings.length : 0;
      }
    }];

    this.filterBy = {};

    this.days = [{
        code: 'sun',
        display: 'Sunday'
      },
      {
        code: 'mon',
        display: 'Monday'
      },
      {
        code: 'tue',
        display: 'Tuesday'
      },
      {
        code: 'wed',
        display: 'Wednesday'
      },
      {
        code: 'thur',
        display: 'Thursday'
      },
      {
        code: 'fri',
        display: 'Friday'
      },
      {
        code: 'sat',
        display: 'Saturday'
      }
    ];

    this.formats = [{
        code: 'b',
        display: 'Beginners'
      },
      {
        code: 'bb',
        display: 'Big Book'
      },
      {
        code: 'anniv',
        display: 'Anniversary'
      },
      {
        code: 'st',
        display: 'Step'
      },
      {
        code: 'ls',
        display: 'Living Sober'
      },
      {
        code: 't',
        display: 'Traditions'
      },
      {
        code: 'ctb',
        display: 'Came To Believe'
      },
      {
        code: 'gra',
        display: 'Grapevine'
      },
      {
        code: 'dr',
        display: 'Daily Reflections'
      },
      {
        code: 'absi',
        display: 'As Bill Sees It'
      },
      {
        code: 'c',
        display: 'Closed'
      },
      {
        code: 'o',
        display: 'Open'
      },
      {
        code: 'w',
        display: 'Women Only'
      },
      {
        code: 'm',
        display: 'Men Only'
      },
      {
        code: 'sp',
        display: 'Speaker'
      },
      {
        code: 'span',
        display: 'Spanish Speaking'
      },
      {
        code: 'od',
        display: 'Open Discussion'
      },
      {
        code: 'cd',
        display: 'Closed Discussion'
      },
      {
        code: 'os',
        display: 'Open Speaker'
      },
      {
        code: 'yp',
        display: 'Young People'
      },
      {
        code: 'gay',
        display: 'Gay'
      },
      {
        code: 'rep',
        display: 'Relapse Prevention'
      },
      {
        code: '3711',
        display: 'Big Book Steps 3, 7 & 11'
      }
    ];

    this.setMeetings();
  }

  setMeetings() {
    this.meetings = groups.map((group, i) => group.meetings.map(
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
          time: moment(meeting.start).format('h:mm A'),
          fullTime: moment(meeting.start).format('HHmm'),
          town: group.address && group.address.locality,
          formatDisplay,
          format: meeting.format,
          location,
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
    console.log('filteredByFormat', filteredByFormat);

    let filteredByTime = this.filterByTime(filteredByFormat, filterBy);
    console.log('filteredByTime', filteredByTime);

    let filteredByDay = this.filterByDay(filteredByTime, filterBy);
    console.log('filteredByDay', filteredByDay);

    let filteredByOpenClosed = this.filterByOpenClosed(filteredByDay, filterBy);
    console.log('filteredByOpenClosed', filteredByOpenClosed);

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