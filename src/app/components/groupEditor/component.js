import {
  GroupEditorController as controller
} from './controller';

export default {
  template: require('./tpl.html'),
  bindings: {
    meetings: '=',
  },
  controller
};