import {
  groups,
  days,
  formats
} from '../../resources';

export class GroupEditorController {

  constructor($scope, $stateParams, $timeout) {
    'ngInject';

    Object.assign(this, {
      $stateParams,
      $timeout,
      $scope,
      groups,
      days,
      formats
    });

  }

  $onInit() {
    this.group = this.groups.find(group => group.id === Number(this.$stateParams.id));
    this.initAutocomplete();
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

        this.group.address = {};

        place.address_components.forEach(component => Object.assign(this.group.address, {
          [component.types[0]]: component.long_name
        }));

        Object.assign(this.group.address, {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });

        this.$scope.$apply();
      }
    });

  }
}