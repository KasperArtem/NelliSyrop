
var myApp=angular.module('myApp', []);

myApp.controller('productList', function ($scope) {



    $scope.products = [

        // Кавова група
        {'productName': 'Амаретто', 'src': 'images/shop/syrop/Кавова група/Амаретто.jpg', 'group': 'coffe-tea'},
        {'productName': 'Баунті', 'src': 'images/shop/syrop/Кавова група/Баунті.jpg','group': 'coffe-tea'},
        {'productName': 'Бейліс', 'src': 'images/shop/syrop/Кавова група/бейліс.jpg','group': 'coffe-tea'},
        {'productName': 'Білий шоколад', 'src': 'images/shop/syrop/Кавова група/білий шоколад.jpg','group': 'coffe-tea'},
        {'productName': 'Ваніль', 'src': 'images/shop/syrop/Кавова група/Ваніль.jpg','group': 'coffe-tea'},
        {'productName': 'Джандуя', 'src': 'images/shop/syrop/Кавова група/Джандуя.jpg','group': 'coffe-tea'},
        {'productName': 'Імбирне печиво', 'src': 'images/shop/syrop/Кавова група/імбирне печиво.jpg','group': 'coffe-tea'},
        {'productName': 'Ірландський Лікер', 'src': 'images/shop/syrop/Кавова група/Ірландський Лікер.jpg','group': 'coffe-tea'},
        {'productName': 'Карамель', 'src': 'images/shop/syrop/Кавова група/Карамель.jpg','group': 'coffe-tea'},
        {'productName': 'Карибський ром', 'src': 'images/shop/syrop/Кавова група/Карибський ром.jpg','group': 'coffe-tea'},
        {'productName': 'Клен', 'src': 'images/shop/syrop/Кавова група/Клен.jpg','group': 'coffe-tea'},
        {'productName': 'Кокос', 'src': 'images/shop/syrop/Кавова група/Кокос.jpg','group': 'coffe-tea'},
        {'productName': 'Лаванда', 'src': 'images/shop/syrop/Кавова група/Лаванда.jpg','group': 'coffe-tea'},
        {'productName': 'Лісовий горіх', 'src': 'images/shop/syrop/Кавова група/Лісовий горіх.jpg','group': 'coffe-tea'},
        {'productName': 'Мед', 'src': 'images/shop/syrop/Кавова група/Мед.jpg','group': 'coffe-tea'},
        {'productName': 'Мигдаль', 'src': 'images/shop/syrop/Кавова група/Мигдаль.jpg','group': 'coffe-tea'},
        {'productName': 'Солена Карамель', 'src': 'images/shop/syrop/Кавова група/Солена Карамель.jpg','group': 'coffe-tea'},
        {'productName': 'Тірамісу', 'src': 'images/shop/syrop/Кавова група/Тірамісу.jpg','group': 'coffe-tea'},
        {'productName': 'Фісташка', 'src': 'images/shop/syrop/Кавова група/Фісташка.jpg','group': 'coffe-tea'},
        {'productName': 'Шоколад', 'src': 'images/shop/syrop/Кавова група/Шоколад.jpg','group': 'coffe-tea'},
        {'productName': 'Шоколадне печиво', 'src': 'images/shop/syrop/Кавова група/Шоколадне печиво.jpg','group': 'coffe-tea'},
        // Коктейльна група
        {'productName': 'Бабл Гам', 'src': 'images/shop/syrop/Коктейльна група/Бабл Гам.jpg','group': 'cocktail'},
        {'productName': 'Блю кюрасао', 'src': 'images/shop/syrop/Коктейльна група/Блю_кюрасао.jpg','group': 'cocktail'},
        {'productName': 'Глінтвейн', 'src': 'images/shop/syrop/Коктейльна група/Глінтвейн.jpg','group': 'cocktail'},
        {'productName': 'Маргарита', 'src': 'images/shop/syrop/Коктейльна група/Маргарита.jpg','group': 'coffe-tea'},
        {'productName': 'Мохіто', 'src': 'images/shop/syrop/Коктейльна група/Мохіто.jpg','group': 'cocktail'},
        {'productName': 'М\'ята', 'src': 'images/shop/syrop/Коктейльна група/М\'ята.jpg','group': 'cocktail'},
        {'productName': 'Піна колада', 'src': 'images/shop/syrop/Коктейльна група/Піна колада.jpg','group': 'cocktail'},
        // Фруктово-ягідна група
        {'productName': 'Абрикос', 'src': 'images/shop/syrop/Фруктово-ягідна група/абрикос.jpg','group': 'fruit-berry'},
        {'productName': 'Ананас', 'src': 'images/shop/syrop/Фруктово-ягідна група/Ананас.jpg','group': 'fruit-berry'},
        {'productName': 'Апельсин', 'src': 'images/shop/syrop/Фруктово-ягідна група/апельсин.jpg','group': 'fruit-berry'},
        {'productName': 'Виноград', 'src': 'images/shop/syrop/Фруктово-ягідна група/Виноград.jpg','group': 'fruit-berry'},
        {'productName': 'Вишня', 'src': 'images/shop/syrop/Фруктово-ягідна група/Вишня.jpg','group': 'fruit-berry'},
        {'productName': 'Гранат', 'src': 'images/shop/syrop/Фруктово-ягідна група/Гранат.jpg','group': 'fruit-berry'},
        {'productName': 'Грейпфрут', 'src': 'images/shop/syrop/Фруктово-ягідна група/Грейпфрут.jpg','group': 'fruit-berry'},
        {'productName': 'Груша', 'src': 'images/shop/syrop/Фруктово-ягідна група/Груша.jpg','group': 'fruit-berry'},
        {'productName': 'Диня', 'src': 'images/shop/syrop/Фруктово-ягідна група/Диня.jpg','group': 'fruit-berry'},
        {'productName': 'Жовтий банан', 'src': 'images/shop/syrop/Фруктово-ягідна група/Жовтий_банан.jpg','group': 'fruit-berry'},
        {'productName': 'Зелене яблуко', 'src': 'images/shop/syrop/Фруктово-ягідна група/зелене яблуко.jpg','group': 'fruit-berry'},
        {'productName': 'Зелений банан', 'src': 'images/shop/syrop/Фруктово-ягідна група/Зелений банан.jpg','group': 'fruit-berry'},
        {'productName': 'Кавун', 'src': 'images/shop/syrop/Фруктово-ягідна група/Кавун.jpg','group': 'fruit-berry'},
        {'productName': 'Ківі', 'src': 'images/shop/syrop/Фруктово-ягідна група/Ківі.jpg','group': 'fruit-berry'},
        {'productName': 'Лайм', 'src': 'images/shop/syrop/Фруктово-ягідна група/Лайм.jpg','group': 'fruit-berry'},
        {'productName': 'Лісова ягода', 'src': 'images/shop/syrop/Фруктово-ягідна група/лісова ягода.jpg','group': 'fruit-berry'},
        {'productName': 'Малина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Малина.jpg','group': 'fruit-berry'},
        {'productName': 'Манго', 'src': 'images/shop/syrop/Фруктово-ягідна група/Манго.jpg','group': 'fruit-berry'},
        {'productName': 'Маракуя', 'src': 'images/shop/syrop/Фруктово-ягідна група/Маракуя.jpg','group': 'fruit-berry'},
        {'productName': 'Персик', 'src': 'images/shop/syrop/Фруктово-ягідна група/Персик.jpg','group': 'fruit-berry'},
        {'productName': 'Полуниця', 'src': 'images/shop/syrop/Фруктово-ягідна група/Полуниця.jpg','group': 'fruit-berry'},
        {'productName': 'Тропік', 'src': 'images/shop/syrop/Фруктово-ягідна група/Тропік.jpg','group': 'fruit-berry'},
        {'productName': 'Чорна смородина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Чорна смородина.jpg','group': 'fruit-berry'},
        {'productName': 'Чорниця', 'src': 'images/shop/syrop/Фруктово-ягідна група/Чорниця.jpg','group': 'fruit-berry'},
        {'productName': 'Шипшина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Шипшина.jpg','group': 'fruit-berry'},
    ];
    });

