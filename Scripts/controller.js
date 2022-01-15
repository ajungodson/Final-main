

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

    .when('/latest1',{
        templateUrl:'latest1.html'


    })

    .when('/latest2',{
        templateUrl:'latest2.html'


    })


    .when('/latest3',{
        templateUrl:'latest3.html'


    })

    .when('/latest4',{
        templateUrl:'latest4.html'


    })

    .when('/latest5',{
        templateUrl:'latest5.html'


    })

    .when('/latest6',{
        templateUrl:'latest6.html'


    })

    .when('/eatbetter',{
        templateUrl:'eatbetter.html'


    })

    .when('/getfit',{
        templateUrl:'getfit.html'


    })

    .when('/manageweight',{
        templateUrl:'manageweight.html'


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



  $scope.latest1=function(){
                    
                  
                    
    $location.path('/latest1')

}

$scope.latest2=function(){
                    
                  
                    
    $location.path('/latest2')

}

$scope.latest3=function(){
                    
                  
                    
    $location.path('/latest3')

}

$scope.latest4=function(){
                    
                  
                    
    $location.path('/latest4')

}

$scope.latest5=function(){
                    
                  
                    
    $location.path('/latest5')

}

$scope.latest6=function(){
                    
                  
                    
    $location.path('/latest6')

}


$scope.eatbetter=function(){
                    
                  
                    
    $location.path('/eatbetter')

}


$scope.getfit=function(){
                    
                  
                    
    $location.path('/getfit')

}

$scope.manageweight=function(){
                    
                  
                    
    $location.path('/manageweight')

}


 }  )






      
   










