app.controller('userCtrl',['$scope','$location',function($scope,$location){
    user={};
    //返回上一页面
    user.id=$location.absUrl().slice(-3);
    user.back=function(){
        if(user.id=='ned'){
            main.jumpTo('cart',user.id,true);
        }else{
            main.jumpTo('detail',user.id,true);
        }
    };
    //返回上一页面结束
    $scope.user=user;
}]);