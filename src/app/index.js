import angular from 'angular';
import 'angular-messages';
import 'angular-material';
import 'angular-material-data-table';
import {
  app,
  AppCtrl
} from './app';
import MeetingListComponent from './components/meetingList';

const MODULE_NAME = 'app';
const ocaaApp = angular.module(MODULE_NAME, [
  'ngMaterial', 
  'md.data.table',
  'ngMessages',
]);

ocaaApp.directive('app', app)
ocaaApp.controller('AppCtrl', AppCtrl);

ocaaApp.component('meetingList', MeetingListComponent);

export default MODULE_NAME;