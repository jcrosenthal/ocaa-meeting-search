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

ocaaApp.config(function ($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light', // whether, by default, text (contrast)
    // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
      '200', '300', '400', 'A100'
    ],
    'contrastLightColors': undefined // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName')
})

export default MODULE_NAME;