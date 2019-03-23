import angular from 'angular';
import 'angular-messages';
import 'angular-material';
import 'angular-material-data-table';
import '@uirouter/angularjs';

import { Config } from './app.config';

import {
  app,
  AppCtrl
} from './app';
import MeetingListComponent from './components/meetingList';
import GroupDetailsComponent from './components/groupDetails';
import GroupEditorComponent from './components/groupEditor';
import ErrorComponent from './components/error';

const MODULE_NAME = 'app';
const ocaaApp = angular.module(MODULE_NAME, [
  'ngMaterial',
  'md.data.table',
  'ngMessages',
  'ui.router'
]);

window.app = ocaaApp;

ocaaApp.directive('app', app)
ocaaApp.controller('AppCtrl', AppCtrl);
ocaaApp.component('meetingList', MeetingListComponent);
ocaaApp.component('groupDetails', GroupDetailsComponent);
ocaaApp.component('groupEditor', GroupEditorComponent);
ocaaApp.component('error', ErrorComponent);

ocaaApp.config(Config);

export default MODULE_NAME;