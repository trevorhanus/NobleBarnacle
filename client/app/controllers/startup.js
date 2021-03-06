angular.module('mimo.startup', [])
  .controller('startupController', function ($scope, dataFactory){
  $scope.startupCosts = dataFactory.model.expenses.startupCosts;
})
  //Uncomment below code for data manipulation factory
/*
  .factory('startupFactory', function(){
    startupFactory = {};
      //place code for manipulation the startup data here

    return startupFactory;
})
*/
//Uncomment below code for custom D3 directive
/*
  .directive('d3Employee', ['$window', '$timeout', 'd3Service', 
    function($window, $timeout, d3Service) {
      return {
        restrict: 'ACE',
        //NOTE TO MYSELF: Replace this with the proper scoping to the data object..
        // something like this... scope:{data:'='}
        scope: true,
        //run as a link directive rather that the compile directive
        //this runs once the html/directives are compiiled and they will
        //be ready to go when the view is loaded.
        link: function(scope, ele, attrs) {
          d3Service.d3().then(function(d3) {
            //place your D3 code here
            //IMPORTANT...
            //remember your code needs to operate on the scope.data object
          });
        }}
    }])
*/