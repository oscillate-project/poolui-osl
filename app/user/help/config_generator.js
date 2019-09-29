'use strict';

app.controller('ConfigGeneratorCtrl', function($scope) {


//angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

//.controller('ConfigGeneratorCtrl', function($scope) {

  $scope.example_config = {
		'pool_address': '',
		'username': '',
		'password': '',
	};


	$scope.example_attr = {
		'with_mail': false,
		'with_worker_id': false,
    'with_pool_address' : 'poolhost.com',
    'with_custom_wallet': 'TFaTmusoThH5t7kWACr3nhQGBmEPA1bxKPQD9RVEGyNB6k8E5f9WG1qvteFhvnzW7WA67HBGQfN824LRn2vYgSNq5Q1Jm6nmeV7',
    'with_custom_worker': 'YourWorker',
    'with_custom_email': 'me@duckmail.com',
    'with_custom_port': '3333',    
	}



	$scope.updateExample = function() {
		var attr = $scope.example_attr;
		var conf = $scope.example_config;
    
		conf['username'] = attr['with_custom_wallet'];
    
    conf['pool_address'] = attr['with_pool_address'] + ':' + attr['with_custom_port']; 

        
		if (attr['with_worker_id'])
			conf['password'] = attr['with_custom_worker'];
		else
			conf['password'] = 'x:';

		if (attr['with_mail'] && attr['with_worker_id'])
			conf['password'] += ':';

		if (attr['with_mail'])
			conf['password'] += attr['with_custom_email'];

		if (!attr['with_mail'] && !attr['with_worker_id']) {
			conf['password'] = 'x';
		}
	}
		
  $scope.updateExample();
});
