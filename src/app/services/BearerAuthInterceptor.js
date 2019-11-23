function BearerAuthInterceptor($state, $window, $q) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.localStorage.getItem('token')) {
                // may also use sessionStorage
                config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
            }
            return config || $q.when(config);
        },
        response: function (response) {
            return response || $q.when(response);
        },
        responseError: function (response) {
            if (response.status === 401) {
                // Redirect user to login page / signup Page.
                $state.go('logIn');
            }
            return $q.reject(response);
        }
    };
};

export default BearerAuthInterceptor;