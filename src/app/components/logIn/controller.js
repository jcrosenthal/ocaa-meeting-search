import moment from 'moment';
export class LogInController {

  constructor($stateParams, $timeout, $http, ENV) {
    'ngInject';

    Object.assign(this, {
      $stateParams,
      $timeout,
      $http,
      ENV,
      user: {}
    });

  }

  $onInit() {

    this.$http.get(`${this.ENV.API_BASE_URL}/users/current`)
      .then(res => {
        this.user = res.data[0];
      });

  }

  logIn() {

    this.$http.post(`${this.ENV.API_BASE_URL}/auth/login`, this.user)
      .then(res => {
        this.user = res.data.user;
        const token = res.data.token;
        localStorage.setItem('token', token);
      });

  }

  logOut() {
    this.user = {};
    localStorage.removeItem('token');
  }

}