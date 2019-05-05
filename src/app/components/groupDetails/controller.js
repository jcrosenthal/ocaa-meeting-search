import moment from 'moment';
export class GroupDetailsController {

  constructor($stateParams, $timeout, $http, ENV) {
    'ngInject';

    Object.assign(this, {
      $stateParams,
      $timeout,
      $http,
      ENV
    });

  }

  $onInit() {

    this.$http.get(this.ENV.API_BASE_URL + '/api/days')
      .then(res => this.days = res.data)
      .then(() => this.$http.get(this.ENV.API_BASE_URL + '/api/formats')
        .then(res => this.formats = res.data))
      .then(() => {
        const todayFormatted = moment().format('YYYY-MM-DD');
        
        this.$http.get(this.ENV.API_BASE_URL + '/api/groups/' + this.$stateParams.id)
          .then((res) => {
            this.group = res.data[0];
            this.directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${this.group.lat},${this.group.lng}`;

            this.group.Meetings = this.group.Meetings.map(meeting => {

              return Object.assign({}, meeting, {
                time: moment(`${todayFormatted} ${meeting.start}`).format('h:mm A'),
                notes: meeting.notes && meeting.notes.replace(/\[|\]/ig, '')
              });

            })
          });

      });

  }

  initMap() {
    const center = {
      lat: parseFloat(this.group.lat),
      lng: parseFloat(this.group.lng)
    };

    const map = new google.maps.Map(document.getElementById('map'), {
      center,
      zoom: 14
    });

    var marker = new google.maps.Marker({
      position: center,
      map
    });

    this.directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${this.group.lat},${this.group.lng}`;

  }

  formatFormats(formats) {
    return formats.split(',')
      .map(format => this.findFormatDisplay(format))
      .filter(e => e);
  }

  findDayDisplay(dayCode) {
    const found = this.days.find(day => day.code === dayCode.toLowerCase());
    return found && found.display;
  }

  findFormatDisplay(formatCode) {
    const found = this.formats.find(format => format.code === formatCode);
    return found && found.display;
  }

}