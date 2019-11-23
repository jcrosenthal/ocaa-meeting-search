import moment from 'moment';

export class MeetingListController {
  constructor($filter, $http, $interval, ENV) {
    'ngInject';

    this.$filter = $filter;
    this.$http = $http;
    this.$interval = $interval;

    this.ENV = ENV;

  }

  $onChanges(changes) {
    console.log('changes', changes);
  }

  $onInit() {

    const _this = this;

    this.getLocation();

    this.setLoading();

    this.isMobile = window.innerWidth <= 720;

    this.meetings = [];
    this.days = [];
    this.formats = [];

    this.isLoading = true;

    Object.assign(this, {
      myPage: 1,
      myLimit: 15,
      query: {
        order: 'start',
        page: 1
      },
      selected: [],
      filterBy: {
        day: moment().format('ddd').toLowerCase()
      },
    });

    this.limitOptions = [15, 25, 50, {
      label: 'All',
      value: function () {
        return _this.sortedFilteredMeetings() ? _this.sortedFilteredMeetings().length : 0;
      }
    }];

    this.$http.get(this.ENV.API_BASE_URL + '/days')
      .then(res => this.days = res.data)
      .then(() => this.$http.get(this.ENV.API_BASE_URL + '/formats')
        .then(res => this.formats = res.data))
      .then(() => {

        this.$http.get(this.ENV.API_BASE_URL + '/meetings')
          .then(res => {

            this.meetingsMaster = res.data;

            this.isLoading = false;

            this.meetings = this.setMeetings();

            this.query.limit = this.sortedFilteredMeetings().length || this.meetingsMaster.length;

            this.filterResults(this.filterBy);
            
          });

      });

  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position = position;
        this.isDistanceActive = true;
        if (this.meetings.length > 1 && this.meetingsMaster.length > 1 && !this.meetingsMaster[0].distance) {
          this.filterResults();
        }
      });
    } else {
      this.locationDisplay = "Geolocation is not supported by this browser.";
    }
  }

  setLoading() {
    var self = this,
      j = 0,
      counter = 0;

    self.mode = 'query';
    self.activated = true;
    self.determinateValue = 30;
    self.determinateValue2 = 30;

    self.showList = [];

    /**
     * Turn off or on the 5 themed loaders
     */
    self.toggleActivation = function () {
      if (!self.activated) self.showList = [];
      if (self.activated) {
        j = counter = 0;
        self.determinateValue = 30;
        self.determinateValue2 = 30;
      }
    };

    this.$interval(function () {
      self.determinateValue += 1;
      self.determinateValue2 += 1.5;

      if (self.determinateValue > 100) self.determinateValue = 30;
      if (self.determinateValue2 > 100) self.determinateValue2 = 30;

      // Incrementally start animation the five (5) Indeterminate,
      // themed progress circular bars

      if ((j < 2) && !self.showList[j] && self.activated) {
        self.showList[j] = true;
      }
      if (counter++ % 4 === 0) j++;

      // Show the indicator in the "Used within Containers" after 200ms delay
      if (j == 2) self.contained = "indeterminate";

    }, 100, 0, true);

    this.$interval(function () {
      self.mode = (self.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);
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

  getDistance(lat, lng) {
    var groupPosition = {
      lat: Number(lat),
      lng: Number(lng)
    };

    var lat1 = groupPosition.lat;
    var lon1 = groupPosition.lng;
    var lat2 = this.position.coords.latitude;
    var lon2 = this.position.coords.longitude;
    var unit = 'M';

    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    } else {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344
      }
      if (unit == "N") {
        dist = dist * 0.8684
      }
      return Math.round(dist * 100) / 100;
    }
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

      const location = group && [
        streetAddr,
        group.locality,
      ].filter(e => e).join(', ');

      const todayMomentFormatted = moment().format('YYYY-MM-DD');
      const distance = this.isDistanceActive ? this.getDistance(group.lat, group.lng) : 0;

      const updatedMeeting = Object.assign({}, meeting, {
        name: group.name,
        time: meeting.start.replace(/:/gi, ''),
        fullTime: moment(todayMomentFormatted + ' ' + meeting.start).format('h:mm A'),
        town: group.locality,
        formatDisplay: formatDisplay,
        location: location,
        distance,
        isWheelchairAccessible: group.is_wheelchair_accessible ? 1 : 0,
        notes: meeting.notes && meeting.notes.replace(/\[|\]/ig, ''),
        directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${meeting.Group.lat},${meeting.Group.lng}`
      });

      // console.log(updatedMeeting);

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
    if (!filterBy || !filterBy.day || !filterBy.day.length) {
      return meetings;
    }

    let filtered = meetings.filter(meeting =>
      filterBy.day === meeting.day.toLowerCase());

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

    // sort by time
    this.query.order = 'start';

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