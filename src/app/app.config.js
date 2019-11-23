class Config {
    static get $$ngIsClass() {
        return true;
    }
    constructor($mdThemingProvider, $locationProvider, $httpProvider, $urlRouterProvider, $stateProvider, $qProvider) {
        'ngInject';

        $mdThemingProvider.theme('default')
            .primaryPalette('orange');

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        $httpProvider.interceptors.push('BearerAuthInterceptor');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('meetingList', {
                url: '/',
                component: 'meetingList',
            })
            .state('groupList', {
                url: '/groups',
                component: 'groupList',
            })
            .state('groupEditor', {
                url: '/group/edit/:id',
                component: 'groupEditor',
            })
            .state('logIn', {
                url: '/login',
                component: 'logIn',
            })
            .state('groupCreator', {
                url: '/group/new',
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