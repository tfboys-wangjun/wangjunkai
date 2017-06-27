/**
 * Created by qintao on 2017/6/22.
 */
angular.module('cartModule',[])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/cart',{
                templateUrl:'component/cart/cart.html',
                controller:'cartCtrl',
                css:'component/cart/cart.css'
            })
    }])
    .controller('cartCtrl',['$scope',function($scope){
        $scope.name = 'lisi';
    }])