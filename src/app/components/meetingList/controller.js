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

    this.meetings = groups.map((group, i) => group.meetings.map(
      meeting => {

        const format = meeting.format.map(formatCode => {
          const foundFormat = this.formats.find(format => format.code === formatCode);
          return foundFormat && foundFormat.display || '';
        }).sort().join(', ');

        const streetAddr = group.address && [
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
          town: group.address && group.address.locality,
          format,
          location,
          isWheelchairAccessible: group.isWheelchairAccessible ? 1 : 0
        });

        return groupMeeting;
      }
    )).reduce((a, b) => a.concat(b));
  }

  sortedFilteredMeetings() {

    console.log('this.query', this.query);

    if (!this.meetings){
      return [];
    }

    let ordered = this.$filter('orderBy')(this.meetings, this.query.order);

    return ordered;

  }

}

export default MeetingListController;