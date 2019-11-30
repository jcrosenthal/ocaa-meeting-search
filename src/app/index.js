import angular from 'angular';

import 'angular-messages';
import 'angular-material';
import 'angular-sanitize';
import 'angular-material-data-table';
import '@uirouter/angularjs';
import 'ng-material-datetimepicker';

import Config from './app.config';

import capitalize from './capitalize.filter';

import {
  app,
  AppCtrl
} from './app';

import MeetingListComponent from './components/meetingList';
import GroupListComponent from './components/groupList';
import GroupDetailsComponent from './components/groupDetails';
import GroupEditorComponent from './components/groupEditor';
import LogInComponent from './components/logIn';
import ErrorComponent from './components/error';

import BearerAuthInterceptor from './services/BearerAuthInterceptor';

const MODULE_NAME = 'app';
const ocaaApp = angular.module(MODULE_NAME, [
  'ngMaterial',
  'md.data.table',
  'ngMessages',
  'ui.router',
  'ngMaterialDatePicker',
]);

window.app = ocaaApp;

ocaaApp.directive('app', app);

ocaaApp.controller('AppCtrl', AppCtrl);

ocaaApp.component('meetingList', MeetingListComponent);
ocaaApp.component('logIn', LogInComponent);
ocaaApp.component('groupList', GroupListComponent);
ocaaApp.component('groupDetails', GroupDetailsComponent);
ocaaApp.component('groupEditor', GroupEditorComponent);
ocaaApp.component('error', ErrorComponent);

ocaaApp.factory('BearerAuthInterceptor', BearerAuthInterceptor);

ocaaApp.constant('ENV', {  
  API_BASE_URL: NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://api.orangenyaa.org'
});

ocaaApp.filter('trusted', ['$sce', function ($sce) {
  return function (url) {
    return $sce.trustAsResourceUrl(url);
  };
}]);

ocaaApp.filter('capitalize', capitalize);

ocaaApp.config(Config);

// ocaaApp.run(Run);

export default MODULE_NAME;