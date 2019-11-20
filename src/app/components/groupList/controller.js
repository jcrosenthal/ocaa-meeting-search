import moment from 'moment';

export class GroupListController {
  constructor($filter, $http, $interval, ENV) {
    'ngInject';

    this.$filter = $filter;
    this.$http = $http;
    this.$interval = $interval;

    this.ENV = ENV;

  }

  $onChanges(changes) {
    console.log('changes', changes);
  }

  $onInit() {

    const _this = this;

    this.setLoading();

    this.groups = [];

    this.isLoading = true;

    Object.assign(this, {
      myPage: 1,
      myLimit: 15,
      query: {
        order: 'start',
        page: 1
      },
      selected: [],
      filterBy: {},
    });

    this.limitOptions = [15, 25, 50, {
      label: 'All',
      value: function () {
        return _this.sortedFilteredGroups() ? _this.sortedFilteredGroups().length : 0;
      }
    }];

    this.$http.get(this.ENV.API_BASE_URL + '/groups')
      .then(res => this.groups = res.data)
      .finally(() => this.isLoading = false);

  }

  setLoading() {
    var self = this,
      j = 0,
      counter = 0;

    self.mode = 'query';
    self.activated = true;
    self.determinateValue = 30;
    self.determinateValue2 = 30;

    self.showList = [];

    /**
     * Turn off or on the 5 themed loaders
     */
    self.toggleActivation = function () {
      if (!self.activated) self.showList = [];
      if (self.activated) {
        j = counter = 0;
        self.determinateValue = 30;
        self.determinateValue2 = 30;
      }
    };

    this.$interval(function () {
      self.determinateValue += 1;
      self.determinateValue2 += 1.5;

      if (self.determinateValue > 100) self.determinateValue = 30;
      if (self.determinateValue2 > 100) self.determinateValue2 = 30;

      // Incrementally start animation the five (5) Indeterminate,
      // themed progress circular bars

      if ((j < 2) && !self.showList[j] && self.activated) {
        self.showList[j] = true;
      }
      if (counter++ % 4 === 0) j++;

      // Show the indicator in the "Used within Containers" after 200ms delay
      if (j == 2) self.contained = "indeterminate";

    }, 100, 0, true);

    this.$interval(function () {
      self.mode = (self.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);
  }

  sortedFilteredGroups() {

    if (!this.groups) {
      return [];
    }

    let ordered = this.$filter('orderBy')(this.groups, this.query.order);

    return this.$filter('filter')(ordered, this.filterBy.searchText);

  }

}

export default GroupListController;