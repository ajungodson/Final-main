

app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'mainpage.html'
    })

    .when('/exercise',{
        templateUrl:'exercise.html'


    })

    .when('/diet',{
        templateUrl:'diet.html'


    })

    .when('/yoga',{
        templateUrl:'yoga.html'


    })



    .otherwise({
        redirectTo:'/'
    })
})

app.controller('main',function($scope,$location){
    
    
    
    $scope.submit1=function(){
        
      
        
            $location.path('/')
        
      }

      
        $scope.submit2=function(){
            
          
            
                $location.path('/exercise')
            
          }

        
        

        $scope.submit3=function(){
                
              
                
            $location.path('/diet')
        
      }
     
      $scope.submit4=function(){
                    
                  
                    
        $location.path('/yoga')
    
  }



 }  )



var app=angular.module('EmpDetails',[]);

  app.controller('myController',function($scope,$http){
 $http({
     method:'GET',
     url:'/model/database.json'


 }).then(function(response){
     $scope.employees=response.data;
 })
})





      
   










