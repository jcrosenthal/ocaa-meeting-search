export class GroupDetailsController {

  constructor($stateParams, $timeout, $http) {
    'ngInject';

    Object.assign(this, {
      $stateParams,
      $timeout,
      $http
    });

  }

  $onInit() {

    this.$http.get('http://localhost:3000/api/days')
      .then(res => this.days = res.data)
      .then(() => this.$http.get('http://localhost:3000/api/formats')
        .then(res => this.formats = res.data))
      .then(() => {

        this.$http.get('http://localhost:3000/api/groups/' + this.$stateParams.id)
          .then((res) => {
            this.group = res.data[0];
            this.initMap();
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
      .filter(e => e).join(', ');
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