/**
 * Created by qintao on 2017/6/22.
 */
angular.module('homeModule',[])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/home',{
                templateUrl:'component/home/home.html',
                controller:'homeCtrl',
                css:"component/home/home.css"
            })
    }])
    .controller('homeCtrl',['$scope','$http','$timeout',function($scope,$http,$timeout){
        $http.get('json/home.json').then(function(res){
            console.log(res);
            $scope.obj = res.data.data.act_info;
            

            $timeout(function(){
                var mySwiper = new Swiper ('.swiper-container', {
                    loop: true,
                    autoplay:500,
                    // 如果需要分页器
                    pagination: '.swiper-pagination'
                })
            },50)
        })
    }])