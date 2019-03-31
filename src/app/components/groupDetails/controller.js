import {
  groups,
  days,
  formats
} from '../../resources';
export class GroupDetailsController {

  constructor($stateParams, $timeout) {
    'ngInject';

    Object.assign(this, {
      $stateParams,
      $timeout
    });

  }

  $onInit() {

    this.group = groups.find(group => group.id === Number(this.$stateParams.id));

    this.initMap();

  }

  initMap() {
    const center = {
      lat: this.group.address.lat,
      lng: this.group.address.lng
    };

    const map = new google.maps.Map(document.getElementById('map'), {
      center,
      zoom: 14
    });

    var marker = new google.maps.Marker({
      position: center,
      map
    });

    this.directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${this.group.address.lat},${this.group.address.lng}`;

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

}