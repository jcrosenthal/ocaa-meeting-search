import moment from 'moment';
export class GroupEditorController {

  constructor($mdDialog, $mdToast, $scope, $state, $stateParams, $http, $timeout, ENV) {
    'ngInject';

    Object.assign(this, {
      $stateParams,
      $timeout,
      $state,
      $scope,
      $http,
      $mdDialog,
      $mdToast,
      ENV
    });

  }

  $onInit() {
    this.group = {};
    this.group.meetings = [];
    this.isEdit = this.$state.current.name === 'groupEditor' ? true : false;

    this.$http.get(this.ENV.API_BASE_URL + '/api/days')
      .then(res => this.days = res.data)
      .then(() => this.$http.get(this.ENV.API_BASE_URL + '/api/formats'))
      .then(res => this.formats = res.data)
      .then(() => {

        if (!this.isEdit) {
          return;
        }

        const todayFormatted = moment().format('YYYY-MM-DD');

        this.$http.get(this.ENV.API_BASE_URL + '/api/groups/' + this.$stateParams.id)
          .then((res) => {

            this.group = res.data[0];
            this.group.meetings = this.group.Meetings && this.group.Meetings.map(meeting => Object.assign({}, meeting, {
              time: moment(`${todayFormatted} ${meeting.start}`).toDate(),
              notes: meeting.notes && meeting.notes.replace(/\[|\]/ig, ''),
              format: meeting.format.split(',')
            })) || [];

          });

      });

    this.initAutocomplete();
  }

  delete(ev) {

    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = this.$mdDialog.confirm()
      .title('Would you like to delete this meeting?')
      .textContent('This cannot be undone.')
      .ariaLabel('Delete this meeting forever')
      .targetEvent(ev)
      .ok('YES, DELETE')
      .cancel('CANCEL');

    this.$mdDialog.show(confirm).then(() => {
      this.$http.delete(this.ENV.API_BASE_URL + '/api/groups/' + this.$stateParams.id)
        .then(res => {
          this.$mdToast.showSimple(res.data.message);
          this.$state.go('meetingList');
        })
        .catch(res => console.log(res));
    });
  }

  addMeeting() {
    this.group.meetings.push({
      format: ['cd'],
      start: '1970-01-02T01:00:00.000Z',
      day: 'mon'
    });
  }

  removeMeeting(index) {
    this.group.meetings = this.group.meetings.filter((meeting, i) => i !== index);
  }

  save() {

    if (this.isEdit) {

      this.$http.put(this.ENV.API_BASE_URL + '/api/groups/' + this.$stateParams.id, Object.assign({}, this.group, {
          meetings: this.group.meetings.map(m => Object.assign({}, m, {
            start: moment(m.start).format('HH:mm:ss'),
            format: m.format.join(','),
          }))
        }))
        .then(() => this.$state.go('groupDetails', {
          id: this.group.id
        }));

      return;

    }

    this.$http.post(this.ENV.API_BASE_URL + '/api/groups', Object.assign({}, this.group, {
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

        this.this.$apply();
      }
    });

  }
}