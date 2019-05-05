import moment from 'moment';

export class MeetingListController {
  constructor($filter, $http, ENV) {
    'ngInject';

    this.$filter = $filter;
    this.$http = $http;
    this.ENV = ENV;
    
  }

  $onInit() {

    const _this = this;

    this.isMobile = window.innerWidth <= 720;

    this.meetings = [];
    this.days = [];
    this.formats = [];

    Object.assign(this, {
      myPage: 1,
      myLimit: 15,
      query: {
        order: 'name',
        page: 1
      },
      selected: [],
      filterBy: {},
    });

    this.limitOptions = [15, 25, 50, {
      label: 'All',
      value: function () {
        return _this.sortedFilteredMeetings() ? _this.sortedFilteredMeetings().length : 0;
      }
    }];

    this.$http.get(this.ENV.API_BASE_URL + '/api/days')
      .then(res => this.days = res.data)
      .then(() => this.$http.get(this.ENV.API_BASE_URL + '/api/formats')
        .then(res => this.formats = res.data))
      .then(() => {

        this.$http.get(this.ENV.API_BASE_URL + '/api/meetings')
          .then(res => {

            this.meetingsMaster = res.data;

            this.meetings = this.setMeetings();

            this.query.limit = this.sortedFilteredMeetings().length || this.meetingsMaster.length;

          });

      });

  }

  formatFormats(formats) {
    return formats.split(',').map(format => this.findFormatDisplay(format));
  }

  findDayDisplay(dayCode) {
    const found = this.days.find(day => day.code === dayCode.toLowerCase());
    return found && found.display;
  }

  findFormatDisplay(formatCode) {
    const found = this.formats.find(format => format.code === formatCode);
    return found && found.display;
  }

  setMeetings() {

    // Assign all meetings to their matching groups
    return this.meetingsMaster.map(meeting => {

      let group = meeting.Group;
      let meetingFormats = meeting.format.split(',');

      const formatDisplay = meetingFormats.map(formatCode => {
        const foundFormat = this.formats.find(format => format.code === formatCode);
        return foundFormat && foundFormat.display || '';
      }).sort().filter(e => e).join(' | ');

      const streetAddr = group && [
        group.street_number,
        group.route
      ].filter(e => e).join(' ');

      // console.log(streetAddr);

      const location = group && [
        streetAddr,
        group.locality,
      ].filter(e => e).join(', ');

      const todayMomentFormatted = moment().format('YYYY-MM-DD');

      const updatedMeeting = Object.assign({}, meeting, {
        name: group.name,
        time: meeting.start.replace(/:/gi, ''),
        fullTime: moment(todayMomentFormatted + ' ' + meeting.start).format('h:mm A'),
        town: group.locality,
        formatDisplay: formatDisplay,
        location: location,
        isWheelchairAccessible: group.isWheelchairAccessible ? 1 : 0,
        notes: meeting.notes && meeting.notes.replace(/\[|\]/ig, ''),
        directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${meeting.Group.lat},${meeting.Group.lng}`
      });

      return updatedMeeting;
    });

  }

  resetResults() {
    this.filterBy = {};
    this.meetings = [];
    this.$onInit();
  }

  filterByFormat(meetings, filterBy) {
    if (!filterBy || !filterBy.formats || !filterBy.formats.length) {
      return meetings;
    }

    let filtered = meetings.filter(meeting =>
      meeting.format.split(',').find(format =>
        filterBy.formats.includes(format.toLowerCase())));

    return filtered;
  }

  filterByDay(meetings, filterBy) {
    if (!filterBy || !filterBy.days || !filterBy.days.length) {
      return meetings;
    }

    let filtered = meetings.filter(meeting =>
      filterBy.days.includes(meeting.day.toLowerCase()));

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
        end: 1659
      },
      evening: {
        start: 1700,
        end: 2359
      },
    };

    let filtered = meetings.filter(meeting => {

      const hours = hoursMap[filterBy.timeRange];
      const meetingStart = meeting.start.replace(/:/ig, '') * .01;

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

    let filtered = filterBy.openClosed === 'open' ?
      meetings.filter(meeting =>
        meeting.format.split(',').find(format =>
          openMeetingTypes.includes(format.toLowerCase())
        )) :
      meetings.filter(meeting =>
        meeting.format.split(',').find(format =>
          !openMeetingTypes.includes(format.toLowerCase())
        ));

    return filtered;
  }

  filterResults(filterBy) {

    this.isLoading = true;

    this.meetings = this.setMeetings();

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

    this.isLoading = false;
  }

  sortedFilteredMeetings() {

    if (!this.meetings) {
      return [];
    }

    let ordered = this.$filter('orderBy')(this.meetings, this.query.order);

    return this.$filter('filter')(ordered, this.filterBy.searchText);

  }

}

export default MeetingListController;