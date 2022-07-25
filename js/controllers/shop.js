
var myApp=angular.module('myApp', []);

myApp.controller('productList', function ($scope) {

    // date
    $scope.products = [

        // Кавова група
        {'productClassName': 'Сироп', 'productName': 'Амаретто', 'src': 'images/shop/syrop/Кавова група/Амаретто.jpg', 'group': 'coffe-tea', 'price': '130₴'},
        {'productClassName': 'Сироп', 'productName': 'Баунті', 'src': 'images/shop/syrop/Кавова група/Баунті.jpg','group': 'coffe-tea', 'price': '150₴'},
        {'productClassName': 'Сироп', 'productName': 'Бейліс', 'src': 'images/shop/syrop/Кавова група/бейліс.jpg','group': 'coffe-tea', 'price': '169₴'},
        {'productClassName': 'Сироп', 'productName': 'Білий шоколад', 'src': 'images/shop/syrop/Кавова група/білий шоколад.jpg','group': 'coffe-tea', 'price': '120₴'},
        {'productClassName': 'Сироп', 'productName': 'Ваніль', 'src': 'images/shop/syrop/Кавова група/Ваніль.jpg','group': 'coffe-tea', 'price': '130₴'},
        {'productClassName': 'Сироп', 'productName': 'Джандуя', 'src': 'images/shop/syrop/Кавова група/Джандуя.jpg','group': 'coffe-tea', 'price': '129₴'},
        {'productClassName': 'Сироп', 'productName': 'Імбирне печиво', 'src': 'images/shop/syrop/Кавова група/імбирне печиво.jpg','group': 'coffe-tea', 'price': '119₴'},
        {'productClassName': 'Сироп', 'productName': 'Ірландський Лікер', 'src': 'images/shop/syrop/Кавова група/Ірландський Лікер.jpg','group': 'coffe-tea', 'price': '150₴'},
        {'productClassName': 'Сироп', 'productName': 'Карамель', 'src': 'images/shop/syrop/Кавова група/Карамель.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Карибський ром', 'src': 'images/shop/syrop/Кавова група/Карибський ром.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Клен', 'src': 'images/shop/syrop/Кавова група/Клен.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Кокос', 'src': 'images/shop/syrop/Кавова група/Кокос.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Лаванда', 'src': 'images/shop/syrop/Кавова група/Лаванда.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Лісовий горіх', 'src': 'images/shop/syrop/Кавова група/Лісовий горіх.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Мед', 'src': 'images/shop/syrop/Кавова група/Мед.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Мигдаль', 'src': 'images/shop/syrop/Кавова група/Мигдаль.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Солена Карамель', 'src': 'images/shop/syrop/Кавова група/Солена Карамель.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Тірамісу', 'src': 'images/shop/syrop/Кавова група/Тірамісу.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Фісташка', 'src': 'images/shop/syrop/Кавова група/Фісташка.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Шоколад', 'src': 'images/shop/syrop/Кавова група/Шоколад.jpg','group': 'coffe-tea', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Шоколадне печиво', 'src': 'images/shop/syrop/Кавова група/Шоколадне печиво.jpg','group': 'coffe-tea', 'price': '50₴'},

        // Фруктово-ягідна група
        {'productClassName': 'Сироп', 'productName': 'Абрикос', 'src': 'images/shop/syrop/Фруктово-ягідна група/абрикос.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Ананас', 'src': 'images/shop/syrop/Фруктово-ягідна група/Ананас.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Апельсин', 'src': 'images/shop/syrop/Фруктово-ягідна група/апельсин.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Виноград', 'src': 'images/shop/syrop/Фруктово-ягідна група/Виноград.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Вишня', 'src': 'images/shop/syrop/Фруктово-ягідна група/Вишня.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Гранат', 'src': 'images/shop/syrop/Фруктово-ягідна група/Гранат.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Грейпфрут', 'src': 'images/shop/syrop/Фруктово-ягідна група/Грейпфрут.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Груша', 'src': 'images/shop/syrop/Фруктово-ягідна група/Груша.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Диня', 'src': 'images/shop/syrop/Фруктово-ягідна група/Диня.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Жовтий банан', 'src': 'images/shop/syrop/Фруктово-ягідна група/Жовтий_банан.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Зелене яблуко', 'src': 'images/shop/syrop/Фруктово-ягідна група/зелене яблуко.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Зелений банан', 'src': 'images/shop/syrop/Фруктово-ягідна група/Зелений банан.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Кавун', 'src': 'images/shop/syrop/Фруктово-ягідна група/Кавун.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Ківі', 'src': 'images/shop/syrop/Фруктово-ягідна група/Ківі.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Лайм', 'src': 'images/shop/syrop/Фруктово-ягідна група/Лайм.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Лісова ягода', 'src': 'images/shop/syrop/Фруктово-ягідна група/лісова ягода.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Малина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Малина.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Манго', 'src': 'images/shop/syrop/Фруктово-ягідна група/Манго.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Маракуя', 'src': 'images/shop/syrop/Фруктово-ягідна група/Маракуя.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Персик', 'src': 'images/shop/syrop/Фруктово-ягідна група/Персик.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Полуниця', 'src': 'images/shop/syrop/Фруктово-ягідна група/Полуниця.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Тропік', 'src': 'images/shop/syrop/Фруктово-ягідна група/Тропік.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Чорна смородина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Чорна смородина.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Чорниця', 'src': 'images/shop/syrop/Фруктово-ягідна група/Чорниця.jpg','group': 'fruit-berry', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Шипшина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Шипшина.jpg','group': 'fruit-berry', 'price': '50₴'},

        // Коктейльна група
        {'productClassName': 'Сироп', 'productName': 'Бабл Гам', 'src': 'images/shop/syrop/Коктейльна група/Бабл Гам.jpg','group': 'cocktail', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Блю кюрасао', 'src': 'images/shop/syrop/Коктейльна група/Блю_кюрасао.jpg','group': 'cocktail', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Глінтвейн', 'src': 'images/shop/syrop/Коктейльна група/Глінтвейн.jpg','group': 'cocktail', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Маргарита', 'src': 'images/shop/syrop/Коктейльна група/Маргарита.jpg','group': 'cocktail', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Мохіто', 'src': 'images/shop/syrop/Коктейльна група/Мохіто.jpg','group': 'cocktail', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'М\'ята', 'src': 'images/shop/syrop/Коктейльна група/М\'ята.jpg','group': 'cocktail', 'price': '50₴'},
        {'productClassName': 'Сироп', 'productName': 'Піна колада', 'src': 'images/shop/syrop/Коктейльна група/Піна колада.jpg','group': 'cocktail', 'price': '50₴'},

        // Новинки

        // Преміальна група
        {'productClassName': 'Сироп', 'productName': 'Синій курасао', 'src': 'images/shop/syrop/Преміум група/Blue kuracao.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'Диня', 'src': 'images/shop/syrop/Преміум група/Dinya.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'Фісташка', 'src': 'images/shop/syrop/Преміум група/Fistashka.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'Гранат', 'src': 'images/shop/syrop/Преміум група/Granat.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'Зелений банан', 'src': 'images/shop/syrop/Преміум група/Green Banan.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'Кавун', 'src': 'images/shop/syrop/Преміум група/Kavun.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'Лайм', 'src': 'images/shop/syrop/Преміум група/Laim.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'Манго', 'src': 'images/shop/syrop/Преміум група/Mango.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'Мохіто', 'src': 'images/shop/syrop/Преміум група/Moxito.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'М\'ята', 'src': 'images/shop/syrop/Преміум група/Myata.jpg','group': 'premium', 'price': '250₴'},
        {'productClassName': 'Сироп', 'productName': 'Вишня', 'src': 'images/shop/syrop/Преміум група/Vishnia.jpg','group': 'premium', 'price': '250₴'},

        // Сироп у стіках

        // Мед та згущене молоко

        // Топінги
        {'productClassName': 'Топінг', 'productName': 'Шоколад', 'src': 'images/shop/syrop/Топінги/Chocolate.jpg','group': 'toppings', 'price': '250₴'},
        {'productClassName': 'Топінг', 'productName': 'Чорна смородина', 'src': 'images/shop/syrop/Топінги/chorna-smorodina.jpg','group': 'toppings', 'price': '250₴'},
        {'productClassName': 'Топінг', 'productName': 'Карамель', 'src': 'images/shop/syrop/Топінги/karamel.jpg','group': 'toppings', 'price': '250₴'},
        {'productClassName': 'Топінг', 'productName': 'Ківі', 'src': 'images/shop/syrop/Топінги/kivi.jpg','group': 'toppings', 'price': '250₴'},
        {'productClassName': 'Топінг', 'productName': 'Вишня', 'src': 'images/shop/syrop/Топінги/vishnya.jpg','group': 'toppings', 'price': '250₴'},
        {'productClassName': 'Топінг', 'productName': 'Банан', 'src': 'images/shop/syrop/Топінги/банан.jpg','group': 'toppings', 'price': '250₴'},
    ];

    //id for products
    var number = 1;
    $scope.count = function (){
        return number++;
    }

    //visible products
    $scope.totalDisplayed = 9;

    $scope.IsVisibleButton = true;

    $scope.loadMore = function () {
            $scope.totalDisplayed += 9;
    };

    // popup
    $scope.IsVisible = false;

    $scope.document = function (){
        $scope.IsVisible = false;
    }

    $scope.Hide = function (){
        $scope.IsVisible = false;
    }
    $scope.ShowHide = function(){
        $scope.IsVisible = true;
        return false;
    }
    });

