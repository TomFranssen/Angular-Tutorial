/**
* Hello Module
*
* test
*/
//angular.module('Hello', []).


$http.get('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=395zw9m7x4rethn4wupwyuyg').success(function(){
    console.log(this);
});

var WorldCtrl = function($scope){
    $scope.population  = 200;
    $scope.countries = [
        {name: 'France', population: 111},
        {name: 'United Kingdom', population: 63.5}
    ]
    $scope.woldsPercentage = function(countryPopulation){
        return (countryPopulation / $scope.population) * 100;
    };
}
