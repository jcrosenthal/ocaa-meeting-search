import {
  groups,
  days,
  formats
} from '../../resources';

import moment from 'moment';
export class GroupEditorController {

  constructor($scope, $stateParams, $http, $timeout) {
    'ngInject';

    Object.assign(this, {
      $stateParams,
      $timeout,
      $scope,
      $http,
      groups,
      days,
      formats
    });

  }

  $onInit() {
    this.group = {}; //this.groups.find(group => group.id === Number(this.$stateParams.id));
    this.group.meetings = []; //meetings.filter(meeting => meeting.group_id === this.group.id);

    this.initAutocomplete();
  }

  addMeeting() {
    this.group.meetings.push({
      "format": ["od"],
      "start": "1970-01-02T01:00:00.000Z",
      "day": "mon"
    });
  }

  removeMeeting(index) {
    this.group.meetings = this.group.meetings.filter((meeting, i) => i !== index);
  }

  save() {
    this.$http.post('http://localhost:3000/api/groups', Object.assign({}, this.group, {
        meetings: this.group.meetings.map(m => Object.assign({}, m, {
          start: moment(m.start).format('HH:mm:ss'),
          format: m.format.join(','),
        }))
      }))
      .then(res => {
        this.group = {};
        this.group.meetings = [];
      });
  }

  initAutocomplete() {
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(['address_components', 'geometry', 'name']);

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);

    autocomplete.addListener('place_changed', () => {
      infowindow.close();

      var place = autocomplete.getPlace();

      if (!place.geometry) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      if (place.address_components) {

        this.group.lat = '';
        this.group.lng = '';

        place.address_components.forEach(component => Object.assign(this.group, {
          [component.types[0]]: component.long_name
        }));

        Object.assign(this.group, {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });

        this.$scope.$apply();
      }
    });

  }
}