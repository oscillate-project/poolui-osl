'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "poolhost.com",
		api_url : 'poolhost.com/api',
		api_refresh_interval: 3000,
		app_update_interval: 5*60000
	};
});
