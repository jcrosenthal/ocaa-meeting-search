import moment from 'moment';
import groups from './groups';

export class MeetingListController {
  constructor() {
    this.selected = [];

    this.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    this.formats = [{
        code: 'b',
        display: 'Beginners Meeting'
      },
      {
        code: 'bb',
        display: 'Big Book Meeting'
      },
      {
        code: 'anniv',
        display: 'Anniversary Meeting'
      },
      {
        code: 'st',
        display: 'Step Meeting'
      },
      {
        code: 'ls',
        display: 'Living Sober Meeting'
      },
      {
        code: 't',
        display: 'Traditions Meeting'
      },
      {
        code: 'ctb',
        display: 'Came To Believe Meeting'
      },
      {
        code: 'gra',
        display: 'Grapevine'
      },
      {
        code: 'dr',
        display: 'Daily Reflections Meeting'
      },
      {
        code: 'absi',
        display: 'As Bill Sees It Meeting'
      },
      {
        code: 'c',
        display: 'Closed Meeting'
      },
      {
        code: 'o',
        display: 'Open Meeting'
      },
      {
        code: 'w',
        display: 'Women Only Meeting'
      },
      {
        code: 'm',
        display: 'Men Only Meeting'
      },
      {
        code: 'sp',
        display: 'Speaker Meeting'
      },
      {
        code: 'span',
        display: 'Spanish Speaking Meeting'
      },
      {
        code: 'od',
        display: 'Open Discussion Meeting'
      },
      {
        code: 'cd',
        display: 'Closed Discussion Meeting'
      },
      {
        code: 'os',
        display: 'Open Speaker Meeting'
      },
      {
        code: 'yp',
        display: 'Young People Meeting'
      },
      {
        code: 'gay',
        display: 'Gay Meeting'
      },
      {
        code: 'rep',
        display: 'Relapse Prevention'
      },
      {
        code: '3711',
        display: 'Big Book Steps 3, 7 & 11 Meeting'
      }
    ];

    this.meetings = groups.map((group, i) => group.meetings.map(
      meeting => {

        const format = meeting.format.map(formatCode => {
          const foundFormat = this.formats.find(format => format.code === formatCode);
          return foundFormat && foundFormat.display || '';
        }).join(', ');

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
          format,
          location,
          isWheelchairAccessible: group.isWheelchairAccessible ? 1 : 0
        });

        return groupMeeting;
      }
    )).reduce((a, b) => a.concat(b));

    console.log('this.meetings', this.meetings);

  }

}

export default MeetingListController;