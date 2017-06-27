/**
 * Created by qintao on 2017/6/22.
 */
angular.module('beequick',['ngRoute','angularCSS','homeModule','categoryModule','cartModule'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .otherwise({redirectTo:'/'});
}])
