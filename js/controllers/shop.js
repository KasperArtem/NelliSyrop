
var myApp=angular.module('myApp', []);

myApp.controller('productList', function ($scope) {



    $scope.products = [
        {'productName': 'Ківі', 'src': 'images/shop/elevator-passenger/1.png', 'group': 'coffe-tea'},
        {'productName': 'Зелений банан', 'src': 'images/shop/elevator-passenger/2.png','group': 'fruit-berry'},
        {'productName': 'Ківі', 'src': 'images/shop/elevator-passenger/1.png','group': 'cocktail'},
        {'productName': 'Зелений банан', 'src': 'images/shop/elevator-passenger/2.png','group': 'new'},
        {'productName': 'Ківі', 'src': 'images/shop/elevator-passenger/1.png','group': 'premium'},
        {'productName': 'Зелений банан', 'src': 'images/shop/elevator-passenger/2.png','group': 'sticks-syrups'},
        {'productName': 'Ківі', 'src': 'images/shop/elevator-passenger/1.png','group': 'honey'},
        {'productName': 'Зелений банан', 'src': 'images/shop/elevator-passenger/2.png','group': 'toppings'},
        {'productName': 'Ківі', 'src': 'images/shop/elevator-passenger/1.png','group': 'coffe-tea'},
        {'productName': 'Зелений банан', 'src': 'images/shop/elevator-passenger/2.png','group': 'fruit-berry'},
        {'productName': 'Ківі', 'src': 'images/shop/elevator-passenger/1.png','group': 'cocktail'},
        {'productName': 'Зелений банан', 'src': 'images/shop/elevator-passenger/2.png','group': 'new'},
        {'productName': 'Ківі', 'src': 'images/shop/elevator-passenger/1.png','group': 'premium'},
        {'productName': 'Зелений банан', 'src': 'images/shop/elevator-passenger/2.png','group': 'sticks-syrups'},
        {'productName': 'Ківі', 'src': 'images/shop/elevator-passenger/1.png','group': 'honey'},
    ];
    });

