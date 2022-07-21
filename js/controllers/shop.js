
var myApp=angular.module('myApp', []);

myApp.controller('productList', function ($scope) {

    $scope.totalDisplayed = 9;

    $scope.loadMore = function () {
        $scope.totalDisplayed += 9;
    };

    $scope.products = [

        // Кавова група
        {'productName': 'Амаретто', 'src': 'images/shop/syrop/Кавова група/Амаретто.jpg', 'group': 'coffe-tea', 'price': '130₴'},
        {'productName': 'Баунті', 'src': 'images/shop/syrop/Кавова група/Баунті.jpg','group': 'coffe-tea', 'price': '150₴'},
        {'productName': 'Бейліс', 'src': 'images/shop/syrop/Кавова група/бейліс.jpg','group': 'coffe-tea', 'price': '169₴'},
        {'productName': 'Білий шоколад', 'src': 'images/shop/syrop/Кавова група/білий шоколад.jpg','group': 'coffe-tea', 'price': '120₴'},
        {'productName': 'Ваніль', 'src': 'images/shop/syrop/Кавова група/Ваніль.jpg','group': 'coffe-tea', 'price': '130₴'},
        {'productName': 'Джандуя', 'src': 'images/shop/syrop/Кавова група/Джандуя.jpg','group': 'coffe-tea', 'price': '129₴'},
        {'productName': 'Імбирне печиво', 'src': 'images/shop/syrop/Кавова група/імбирне печиво.jpg','group': 'coffe-tea', 'price': '119₴'},
        {'productName': 'Ірландський Лікер', 'src': 'images/shop/syrop/Кавова група/Ірландський Лікер.jpg','group': 'coffe-tea', 'price': '150₴'},
        {'productName': 'Карамель', 'src': 'images/shop/syrop/Кавова група/Карамель.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Карибський ром', 'src': 'images/shop/syrop/Кавова група/Карибський ром.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Клен', 'src': 'images/shop/syrop/Кавова група/Клен.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Кокос', 'src': 'images/shop/syrop/Кавова група/Кокос.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Лаванда', 'src': 'images/shop/syrop/Кавова група/Лаванда.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Лісовий горіх', 'src': 'images/shop/syrop/Кавова група/Лісовий горіх.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Мед', 'src': 'images/shop/syrop/Кавова група/Мед.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Мигдаль', 'src': 'images/shop/syrop/Кавова група/Мигдаль.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Солена Карамель', 'src': 'images/shop/syrop/Кавова група/Солена Карамель.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Тірамісу', 'src': 'images/shop/syrop/Кавова група/Тірамісу.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Фісташка', 'src': 'images/shop/syrop/Кавова група/Фісташка.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Шоколад', 'src': 'images/shop/syrop/Кавова група/Шоколад.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productName': 'Шоколадне печиво', 'src': 'images/shop/syrop/Кавова група/Шоколадне печиво.jpg','group': 'coffe-tea', 'price': '50₴'},

        // Фруктово-ягідна група
        {'productName': 'Абрикос', 'src': 'images/shop/syrop/Фруктово-ягідна група/абрикос.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Ананас', 'src': 'images/shop/syrop/Фруктово-ягідна група/Ананас.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Апельсин', 'src': 'images/shop/syrop/Фруктово-ягідна група/апельсин.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Виноград', 'src': 'images/shop/syrop/Фруктово-ягідна група/Виноград.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Вишня', 'src': 'images/shop/syrop/Фруктово-ягідна група/Вишня.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Гранат', 'src': 'images/shop/syrop/Фруктово-ягідна група/Гранат.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Грейпфрут', 'src': 'images/shop/syrop/Фруктово-ягідна група/Грейпфрут.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Груша', 'src': 'images/shop/syrop/Фруктово-ягідна група/Груша.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Диня', 'src': 'images/shop/syrop/Фруктово-ягідна група/Диня.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Жовтий банан', 'src': 'images/shop/syrop/Фруктово-ягідна група/Жовтий_банан.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Зелене яблуко', 'src': 'images/shop/syrop/Фруктово-ягідна група/зелене яблуко.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Зелений банан', 'src': 'images/shop/syrop/Фруктово-ягідна група/Зелений банан.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Кавун', 'src': 'images/shop/syrop/Фруктово-ягідна група/Кавун.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Ківі', 'src': 'images/shop/syrop/Фруктово-ягідна група/Ківі.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Лайм', 'src': 'images/shop/syrop/Фруктово-ягідна група/Лайм.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Лісова ягода', 'src': 'images/shop/syrop/Фруктово-ягідна група/лісова ягода.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Малина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Малина.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Манго', 'src': 'images/shop/syrop/Фруктово-ягідна група/Манго.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Маракуя', 'src': 'images/shop/syrop/Фруктово-ягідна група/Маракуя.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Персик', 'src': 'images/shop/syrop/Фруктово-ягідна група/Персик.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Полуниця', 'src': 'images/shop/syrop/Фруктово-ягідна група/Полуниця.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Тропік', 'src': 'images/shop/syrop/Фруктово-ягідна група/Тропік.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Чорна смородина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Чорна смородина.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Чорниця', 'src': 'images/shop/syrop/Фруктово-ягідна група/Чорниця.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productName': 'Шипшина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Шипшина.jpg','group': 'fruit-berry', 'price': '50₴'},

        // Коктейльна група
        {'productName': 'Бабл Гам', 'src': 'images/shop/syrop/Коктейльна група/Бабл Гам.jpg','group': 'cocktail', 'price': '50₴'},
        {'productName': 'Блю кюрасао', 'src': 'images/shop/syrop/Коктейльна група/Блю_кюрасао.jpg','group': 'cocktail', 'price': '50₴'},
        {'productName': 'Глінтвейн', 'src': 'images/shop/syrop/Коктейльна група/Глінтвейн.jpg','group': 'cocktail', 'price': '50₴'},
        {'productName': 'Маргарита', 'src': 'images/shop/syrop/Коктейльна група/Маргарита.jpg','group': 'cocktail', 'price': '50₴'},
        {'productName': 'Мохіто', 'src': 'images/shop/syrop/Коктейльна група/Мохіто.jpg','group': 'cocktail', 'price': '50₴'},
        {'productName': 'М\'ята', 'src': 'images/shop/syrop/Коктейльна група/М\'ята.jpg','group': 'cocktail', 'price': '50₴'},
        {'productName': 'Піна колада', 'src': 'images/shop/syrop/Коктейльна група/Піна колада.jpg','group': 'cocktail', 'price': '50₴'},

        // Новинки

        // Преміальна група

        // Сироп у стіках

        // Мед та згущене молоко

        // Топінги
    ];
    });

