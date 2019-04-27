/**
 * @ngdoc filter
 * @name ufn.roo.home:capitalize
 *
 * @description capitalizes the first letters in a value
 *
 */
function capitalize() {
  'ngInject';

  return filter;

  function filter(input) {

    return input ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';

  }

}

export default capitalize;
