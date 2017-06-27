/**
 * Created by qintao on 2017/6/22.
 */
angular.module('categoryModule',[])
	.config(['$routeProvider',function($routeProvider){
	    $routeProvider
	        .when('/category',{
	            templateUrl:'component/category/category.html',
	            controller:'categotyCtrl',
	            css:'component/category/category.css'
	        })
	}])
	.controller('categotyCtrl',['$scope','$http',function($scope,$http){
	    $http.get('json/category.json').then(function(res){
	    	$scope.cate = res.data.data.categories;
	    	$scope.prod = res.data.data.products;
	    	console.log($scope.prod[104747]);
	    	$scope.x = 104747;
	    	$scope.tip = function (key) {
	    		$scope.x = key;
	    		$scope.sortStyle = '';
	    	}
	    	$scope.d = 'none';
	    	$scope.dn = 'none';
	    	$scope.db = 'none';
	    	$scope.showSub = function () {
	    		if ($scope.db =='block') {
	    			$scope.d = 'block';
	    			$scope.db = 'none';
	    			$scope.dn = 'block';
	    		} else {
	    			$scope.d == 'none' ? $scope.d = 'block' : $scope.d = 'none';
	    			$scope.dn == 'none' ? $scope.dn = 'block' : $scope.dn = 'none';
	    		}

	    		


	    		// $scope.flag ? $scope.d = 'block' : $scope.d = 'none';
	    		// $scope.flag ? $scope.dn = 'block' : $scope.dn = 'none';
	    		// $scope.flag = !$scope.flag;
	    	}
	    	$scope.showSort = function () {
	    		if ($scope.dn == 'block') {
	    			$scope.d = 'block';
	    			$scope.dn = 'none';
	    			$scope.db = 'block';
	    		} else {
	    			$scope.d == 'none' ? $scope.d = 'block' : $scope.d = 'none';
	    			$scope.db == 'none' ? $scope.db = 'block' : $scope.db = 'none';
	    		}

	    		
	    		

	    		// $scope.flag ? $scope.d = 'block' : $scope.d = 'none';
	    		// $scope.flag ? $scope.db = 'block' : $scope.db = 'none';
	    		// $scope.flag = !$scope.flag;
	    	}
	    	$scope.showA = function (a) {
	    		// if (a == '全部分类') {
	    		// 	$scope.name = '';
	    		// } else {
	    		// 	$scope.name = a;
	    		// }
	    		a =='全部分类' ? $scope.name = '' : $scope.name = a ;
	    		
	    		
	    		$scope.d = 'none';
	    		$scope.dn = 'none';

	    	}
	    	$scope.showB = function (b) {
	    		$scope.sortStyle = b ;
	    		$scope.d = 'none';
	    		$scope.db = 'none';
	    	}
	    })
	}])