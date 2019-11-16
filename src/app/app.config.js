class Config {
    static get $$ngIsClass() {
        return true;
    }
    constructor($mdThemingProvider, $locationProvider, $urlRouterProvider, $stateProvider, $qProvider) {
        'ngInject';

        $mdThemingProvider.theme('default')
            .primaryPalette('orange');

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('meetingList', {
                url: '/',
                component: 'meetingList',
            })
            .state('groupEditor', {
                url: '/group/edit/:id',
                component: 'groupEditor',
            })
            .state('groupDetails', {
                url: '/group/details/:id',
                component: 'groupDetails',
            })
            .state('error', {
                url: '/error',
                component: 'error'
            });

        $qProvider.errorOnUnhandledRejections(false);

    }
}

export default Config;