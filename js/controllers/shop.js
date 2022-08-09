
var myApp=angular.module('myApp', []);

myApp.controller('productList', function ($scope) {

    // popup
    $scope.IsVisible = false;

    $scope.Hide = function (){
        $scope.IsVisible = false;
    }
    $scope.ShowHide = function(){
        $scope.IsVisible = true;
        return false;
    }

    $scope.NameProduct = function (productClassName, productName){
        angular.element(document.querySelector("#productName")).text(productClassName + ' ' + productName);
    };

    // popup details
    $scope.IsVisibleDescription = false;
    $scope.IsVisibleDetails = false;

    $scope.HideDetails = function (){
        $scope.IsVisibleDetails = false;
    }
    $scope.ShowHideDetails = function(){
        $scope.IsVisibleDetails = true;
        return false;
    }

    $scope.ProductDetails = function (productClassName, productName, src, price, description){
        angular.element(document.querySelector("#detailsName")).text(productClassName + ' ' + productName + ' - ' + price);
        angular.element(document.querySelector("#detailsSrc")).attr('src', src);
        angular.element(document.querySelector("#detailsDescription")).text(description);
    };

    // date
    $scope.products = [

        // Кавова група
        {'productClassName': 'Сироп', 'productName': 'Амаретто', 'src': 'images/shop/syrop/Кавова група/Амаретто.jpg', 'group': 'coffe-tea', 'price': '130₴',
            'description': 'Прекрасна альтернатива відомому італійському лікеру "Амаретто".Має смак мигдального лікеру з легким гіркуватим присмаком.Поєднується з кавою, десертами, морозивом, гарячим шоколадом.'},
        {'productClassName': 'Сироп', 'productName': 'Баунті', 'src': 'images/shop/syrop/Кавова група/Баунті.jpg','group': 'coffe-tea', 'price': '150₴',
            'description': 'Сироп "Баунті" має напівпрозорий і золотисто - білий колір. Шоколадно - кокосовий аромат сиропу Баунті ідеально поєднується як з міцними нотками кави, так і зі свіжістю молочних напоїв. Він ідеальний у поєднанні з алкогольними коктейлями і незамінний при випічці бісквітних ласощі.'},
        {'productClassName': 'Сироп', 'productName': 'Бейліс', 'src': 'images/shop/syrop/Кавова група/бейліс.jpg','group': 'coffe-tea', 'price': '169₴',
            'description': 'Солодка альтернатива лікеру "Бейліс", легке поєднання аромату віскі та шоколаду з приємним вершковим смаком. Цікаво поєднується з кавою, десертами, морозивом, використовується в приготуванні коктейлів.'},
        {'productClassName': 'Сироп', 'productName': 'Білий шоколад', 'src': 'images/shop/syrop/Кавова група/білий шоколад.jpg','group': 'coffe-tea', 'price': '120₴',
            'description': 'Має ніжний смак білого шоколаду. Поєднується з кавою, молочними коктейлями, використовується у випічці та в приготуванні кремів.'},
        {'productClassName': 'Сироп', 'productName': 'Ваніль', 'src': 'images/shop/syrop/Кавова група/Ваніль.jpg','group': 'coffe-tea', 'price': '130₴',
            'description': 'Має аромат знайомої з дитинства спеції. Використовується в кавових напоях, молочних коктейлях, випічці та приготуванні кремів.'},
        {'productClassName': 'Сироп', 'productName': 'Джандуя', 'src': 'images/shop/syrop/Кавова група/Джандуя.jpg','group': 'coffe-tea', 'price': '129₴',
            'description': 'Сироп "Джандуя" має приємний коричнево-шоколадний колір. Елегантний, захоплюючий аромат сиропу рясніє шоколадними та горіховими нотками. Приємний, гармонійний, тонізуючий смак сиропу розкривається тонами темного шоколаду і п\'є ємонтського лісового горіха.'},
        {'productClassName': 'Сироп', 'productName': 'Імбирне печиво', 'src': 'images/shop/syrop/Кавова група/імбирне печиво.jpg','group': 'coffe-tea', 'price': '119₴',
            'description': 'Поєднання смаку кориці та кореня імбиру робить цей сироп незабутнім. Використовується в приготуванні зігріваючих напоїв, випічці, каві.'},
        {'productClassName': 'Сироп', 'productName': 'Ірландський Лікер', 'src': 'images/shop/syrop/Кавова група/Ірландський Лікер.jpg','group': 'coffe-tea', 'price': '150₴',
            'description': 'Сироп "Ірландський лікер" - це унікальний сироп, що в точності копіює ірландський лікер Шеріданс, його одному шоколадно-кавову складову. Ірландський лікер має неповторний, приємний смак і аромат. Це сироп для коктейлів, для кави та кавових напоїв, а також як добавка до морозиво.'},
        {'productClassName': 'Сироп', 'productName': 'Карамель', 'src': 'images/shop/syrop/Кавова група/Карамель.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Сироп має солодкий смак з нотками вершкової карамелі та відтінками солодкої іриски. Незамінний, як в приготуванні напоїв, в будь якому поєднані, так і в приготуванні десертів та випічки.'},
        {'productClassName': 'Сироп', 'productName': 'Карибський ром', 'src': 'images/shop/syrop/Кавова група/Карибський ром.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Сироп "Карибський Ром" має каштановий колір. Аромат звучить фруктово-пряними відтінками витриманого рому. Сироп приголомшливо точно передає смак справжнього карибського рому і розкривається нотами ванілі, кориці, карамелі і сухофруктів.'},
        {'productClassName': 'Сироп', 'productName': 'Клен', 'src': 'images/shop/syrop/Кавова група/Клен.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Сироп ТМ Nelli "Клен" за смаком схожий на темний рідкий мед з легким карамельним ароматом. Сироп "Клен" класична добавка до млинців і оладок.'},
        {'productClassName': 'Сироп', 'productName': 'Кокос', 'src': 'images/shop/syrop/Кавова група/Кокос.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Самий відомий тропічний фрукт - це кокос, в його смаку відчутна помірна солодкуватість, свіжість та характерна терпкість. Сироп "Кокос" додасть вашим напоям тропічного зною. Широко використовується в кавових напоях, молочних коктейлях, в кремах та випічці.'},
        {'productClassName': 'Сироп', 'productName': 'Лаванда', 'src': 'images/shop/syrop/Кавова група/Лаванда.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Ніжний квітковий смак та духмяний аромат лавандових полів Провансу. Використовується для: кави, чаю, коктейлів, випічки, десертів, морозива.'},
        {'productClassName': 'Сироп', 'productName': 'Лісовий горіх', 'src': 'images/shop/syrop/Кавова група/Лісовий горіх.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Сироп ТМ Неллі "Лісовий горіх" має білі виражений смак горіха. Його додають до кави, випічки, гарячого шоколаду, морозиво.'},
        {'productClassName': 'Сироп', 'productName': 'Мед', 'src': 'images/shop/syrop/Кавова група/Мед.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Смак свіжого меду і карамелі, що переплітається з солодкуватим ароматом ванілі та польвих квітів. Використовується для: кави, чаю, безалкогольних коктейлів, випічки, десертів.'},
        {'productClassName': 'Сироп', 'productName': 'Мигдаль', 'src': 'images/shop/syrop/Кавова група/Мигдаль.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Сироп ТМ Неллі "Мігдаль" на основі мигдалю має надзвичайно приємний смак та аромат, тому з великим успіхом використовується баристами та кондитерами. Сироп чудово поєднується з кавовими напоями, гарячим шоколадом та випічкою.'},
        {'productClassName': 'Сироп', 'productName': 'Солена Карамель', 'src': 'images/shop/syrop/Кавова група/Солена Карамель.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'У сиропі ТМ Неллі "Солена карамель" надзвичайне поєднання вершків, ванілі та солі надає сиропу особливої вишуканості. Поєднується з кавовими напоями, гарячим шоколадом, випічкою, морозивом.'},
        {'productClassName': 'Сироп', 'productName': 'Тірамісу', 'src': 'images/shop/syrop/Кавова група/Тірамісу.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Сироп "Тірамісу" має каштановий колір. В ароматі сиропу переважають ноти капучіно, шоколаду та ванілі. Густий Сироп, має насичений смак з відтінками ірландського крему, кава зі збитими вершками, ніжними нотками ванілі та шоколаду. Оригінальний сироп "Тірамісу" з ароматом традиційного італійського десерту.'},
        {'productClassName': 'Сироп', 'productName': 'Фісташка', 'src': 'images/shop/syrop/Кавова група/Фісташка.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Поєднання солодких ноток тростинного цукру з насиченими мотивами смажених фисташок - це прекрасне доповнення до багатьох напоїв та солодощів. Використовується з кавовими напоями, коктейлями, випічкою та морозивом.'},
        {'productClassName': 'Сироп', 'productName': 'Шоколад', 'src': 'images/shop/syrop/Кавова група/Шоколад.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Має смак темного шоколаду та насичений аромат какао бобів. Використовується в кавових напоях, десертах, випічці.'},
        {'productClassName': 'Сироп', 'productName': 'Шоколадне печиво', 'src': 'images/shop/syrop/Кавова група/Шоколадне печиво.jpg','group': 'coffe-tea', 'price': '50₴',
            'description': 'Сироп "Шоколадне печиво" подарує чарівний шоколадний смак. Густа апетитна консистенція має насичений темно-коричневий колір. Смак сиропу насичений відтінками підсмаженого печива в поєднані з пряними нюансами вершково-молочного шоколаду. Цей сироп розкішна основа алкогольних і безалкогольних коктейлів.'},

        // Фруктово-ягідна група
        {'productClassName': 'Сироп', 'productName': 'Абрикос', 'src': 'images/shop/syrop/Фруктово-ягідна група/абрикос.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Має кисло-солодкий смак, ідеально підходить для приготування фруктових коктейлів, пуншів, газованих напоїв, чаю, випічки та кремів.'},
        {'productClassName': 'Сироп', 'productName': 'Ананас', 'src': 'images/shop/syrop/Фруктово-ягідна група/Ананас.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп "Ананас" має насичений жовтий колір. Аромат звучить нотами свіжорозрізаного ананаса. Сироп ТМ Неллі "Ананас" повністю відтворює солодку кислинку і свіжість цього екзотичного фрукта. Чудово підходить для створення алкогольних коктейлів на основі джину або мартіні.'},
        {'productClassName': 'Сироп', 'productName': 'Апельсин', 'src': 'images/shop/syrop/Фруктово-ягідна група/апельсин.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Солодкий цитрусовий смак апельсина дарує хвилю свіжості улюбленим напоям. Використовується для приготування коктейлів, випічки, лимонадів, як доповнення до десертів.'},
        {'productClassName': 'Сироп', 'productName': 'Виноград', 'src': 'images/shop/syrop/Фруктово-ягідна група/Виноград.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп "Виноград" має насичений смак та колір. Аромат звучить нотами винограду в цукрі. Яскравий, соковитий сироп з домінантного стиглого винограду у смаку й ароматі, здатний надати елегантності та шарму випічці, десертів, чаю, йогурт, морозиво або коктейлю.'},
        {'productClassName': 'Сироп', 'productName': 'Вишня', 'src': 'images/shop/syrop/Фруктово-ягідна група/Вишня.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп зі смаком вишні - це прекрасна можливість насолоджуватися улюбленим смаком в будь-який час року. Насичений кисло-солодкий смак з ледь відчутним ароматом вишневої кісточки, а осяйні блискітки додадуть напою ще більшої привабливості.'},
        {'productClassName': 'Сироп', 'productName': 'Гранат', 'src': 'images/shop/syrop/Фруктово-ягідна група/Гранат.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Неллі "Гранат" має натуральний кисло-солодкий смак. Сироп використовують у приготуванні освіжаючих напоїв, коктейлів, десертів, доповненням до морозиво. '},
        {'productClassName': 'Сироп', 'productName': 'Грейпфрут', 'src': 'images/shop/syrop/Фруктово-ягідна група/Грейпфрут.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Nelli "Грейпфрут" має насичений помаранчево-червоний колір, чудовий цитрусовий смак з легкою гірчинкою. Використовується як солодка поливання до млинців, тістечок, морозиво.'},
        {'productClassName': 'Сироп', 'productName': 'Груша', 'src': 'images/shop/syrop/Фруктово-ягідна група/Груша.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп "Груша" має золотистий колір та запашний аромат стиглих медових груш. Цей сироп стане прекрасним доповненням до кави, какао, коктейлів, лимонаду, содової і кондитерських виробів.'},
        {'productClassName': 'Сироп', 'productName': 'Диня', 'src': 'images/shop/syrop/Фруктово-ягідна група/Диня.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Неллі "Диня" використовується в основному в різноманітних лимонаді,коктейлі,десерти. Ароматий та смачний,незамінний у будь яку пору року.'},
        {'productClassName': 'Сироп', 'productName': 'Жовтий банан', 'src': 'images/shop/syrop/Фруктово-ягідна група/Жовтий_банан.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Банан є найпопулярнішим фруктом в будь якому куточку планети. Густий та насиченний смак стиглих жовтих бананів додасть особливого смаку улюбленим напоям, десертів, йогуртів.'},
        {'productClassName': 'Сироп', 'productName': 'Зелене яблуко', 'src': 'images/shop/syrop/Фруктово-ягідна група/зелене яблуко.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Тонкий кисло-солодкий смак та насичений, свіжий аромат запашних зелених яблук.'},
        {'productClassName': 'Сироп', 'productName': 'Зелений банан', 'src': 'images/shop/syrop/Фруктово-ягідна група/Зелений банан.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ "Nelli" родич жовтого банана з Тайських островів, додасть Вашим коктейлів насичений смак і яскравий колір.'},
        {'productClassName': 'Сироп', 'productName': 'Кавун', 'src': 'images/shop/syrop/Фруктово-ягідна група/Кавун.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Неперевершений смак соковитого кавуна та аромат сонячного літа. Сироп чудово підходить для коктейлів з рому і мартіні.'},
        {'productClassName': 'Сироп', 'productName': 'Ківі', 'src': 'images/shop/syrop/Фруктово-ягідна група/Ківі.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп "Ківі" ТМ Неллі - сироп насиченого зеленого кольору,відрізняється соковитим смаком стиглих, солодких ківі.Чудово поєднується з тоніком,лимонадом,морсами і соками. Допоможе надати вашій вишуканого напою тропічного смаку.'},
        {'productClassName': 'Сироп', 'productName': 'Лайм', 'src': 'images/shop/syrop/Фруктово-ягідна група/Лайм.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Насичений освіжаючий смак стиглого лайма з легкою кислинкою, яскравим ароматом з цитрусовими відтінками.'},
        {'productClassName': 'Сироп', 'productName': 'Лісова ягода', 'src': 'images/shop/syrop/Фруктово-ягідна група/лісова ягода.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Неллі "Лісова ягода" це композиційна суміш лісових ягід, яка порадує самих вибагливих гурманів. Використовується як доповнення до кави,чаю,десертів та випічки.'},
        {'productClassName': 'Сироп', 'productName': 'Малина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Малина.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп "Малина" відрізняється ніжним смаком та ароматом. Добре підходить для оформлення морозиво, фруктових десертів. З його додаванням готують шаруваті коктейлі, газовані напої, лимонади.'},
        {'productClassName': 'Сироп', 'productName': 'Манго', 'src': 'images/shop/syrop/Фруктово-ягідна група/Манго.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Неллі "Манго" має екзотично-солодкий смак та аромат. Ідеально пасуватиме до ваших прохолоджуючих напоїв,коктейлів,десертів та випічки.'},
        {'productClassName': 'Сироп', 'productName': 'Маракуя', 'src': 'images/shop/syrop/Фруктово-ягідна група/Маракуя.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Nelli "Маракуя" має легкий та не навязливий смак тропічного фрукта. Стані ідельним доповненням для ваших десертів та напоїв.'},
        {'productClassName': 'Сироп', 'productName': 'Персик', 'src': 'images/shop/syrop/Фруктово-ягідна група/Персик.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Nelli "Персик" Вирізняється соковитим солодким смаком та насиченим помаранчевим кольором. Це цікаве доповнення до лимонадів,чаю,кави,випічки та десертів.'},
        {'productClassName': 'Сироп', 'productName': 'Полуниця', 'src': 'images/shop/syrop/Фруктово-ягідна група/Полуниця.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Nelli "Полуниця" має незрівнянний соковитий,ароматний смак з насиченим червоним кольором. Ідеально доповнить будь-який напій та десерт.'},
        {'productClassName': 'Сироп', 'productName': 'Тропік', 'src': 'images/shop/syrop/Фруктово-ягідна група/Тропік.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Nelli "Тропік" це найкраще поєднання екзотичних фруктів в одному сиропі. Широко використовується в десерти, напої, коктейлі.'},
        {'productClassName': 'Сироп', 'productName': 'Чорна смородина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Чорна смородина.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Nelli "Чорна смородина" має насичений кисло-солодкий,злегка терпкуватий смак. Чудово доповнить ваші кавові напої,десерти,морозиво,алкогольні та безалкогольні коктейлі.'},
        {'productClassName': 'Сироп', 'productName': 'Чорниця', 'src': 'images/shop/syrop/Фруктово-ягідна група/Чорниця.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': 'Сироп ТМ Nelli "Чорниця" ароматний з хорошим насиченим синювато-червоним кольором. Сироп є прекрасним доповненням до різних напоїв і десертів.'},
        {'productClassName': 'Сироп', 'productName': 'Шипшина', 'src': 'images/shop/syrop/Фруктово-ягідна група/Шипшина.jpg','group': 'fruit-berry', 'price': '50₴',
            'description': ' '},

        // Коктейльна група
        {'productClassName': 'Сироп', 'productName': 'Бабл Гам', 'src': 'images/shop/syrop/Коктейльна група/Бабл Гам.jpg','group': 'cocktail', 'price': '50₴',
            'description': 'Сироп "Бабл Гам" - це солодкий смак дитинства, смак американської жуйки Bubble gum. Цей сироп має дуже приємний смак і аромат. Підходить для коктейлів, кави та кавових напоїв, а також як добавка до морозиво.'},
        {'productClassName': 'Сироп', 'productName': 'Блю кюрасао', 'src': 'images/shop/syrop/Коктейльна група/Блю_кюрасао.jpg','group': 'cocktail', 'price': '50₴',
            'description': 'Сироп "Блю Кюросао" - це готовий продукт приємного кольору і смаку, який застосовується для вираження кольору, смаку і аромату при приготуванні холодного і гарячого кави, алкогольних коктейлів, молочних коктейлів, морозива, десертів, пудингів, кремів, кондитерських виробів.'},
        {'productClassName': 'Сироп', 'productName': 'Глінтвейн', 'src': 'images/shop/syrop/Коктейльна група/Глінтвейн.jpg','group': 'cocktail', 'price': '50₴',
            'description': 'Пряний на смак з приємним винним ароматом вразить Вас ароматним букетом спецій. В основу сиропів лягли: аніс, імбир, мед, кориця, гвоздика. Використовують у приготуванні різноманітних коктейлів.'},
        {'productClassName': 'Сироп', 'productName': 'Маргарита', 'src': 'images/shop/syrop/Коктейльна група/Маргарита.jpg','group': 'cocktail', 'price': '50₴',
            'description': 'Сироп "Маргарита" має зелений колір і соковитий цитрусовий аромат. Сироп відрізняється потужним смаком лайма з нотками лимона і апельсинового екстракту. Цей бленд відмінно підходить для швидкого і легкого приготування будь-якого виду Маргарити - класичної, замороженої, з вмістом фруктів і без них.'},
        {'productClassName': 'Сироп', 'productName': 'Мохіто', 'src': 'images/shop/syrop/Коктейльна група/Мохіто.jpg','group': 'cocktail', 'price': '50₴',
            'description': 'Відтворює смак культового кубинського коктейлю на основі рому, м\'яти,лайму та тростиного цукру.'},
        {'productClassName': 'Сироп', 'productName': 'М\'ята', 'src': 'images/shop/syrop/Коктейльна група/М\'ята.jpg','group': 'cocktail', 'price': '50₴',
            'description': 'Насичений смак свіжої м\'яти з легким післясмаком ментолу.'},
        {'productClassName': 'Сироп', 'productName': 'Піна колада', 'src': 'images/shop/syrop/Коктейльна група/Піна колада.jpg','group': 'cocktail', 'price': '50₴',
            'description': 'Сироп "Піна-Колада" має золотистий колір. Аромат сиропу розкривається чудовими нотами тропічних фруктів. Цей сироп поєднує в собі солодкий і свіжий смак ананасового соку і кокосового молочка, двох головних складових приголомшливо смачного коктейлю Піна-Колада.'},

        // Новинки
        {'productClassName': 'Сироп', 'productName': 'Алича', 'src': 'images/shop/syrop/Новинки/Алича.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Байкал', 'src': 'images/shop/syrop/Новинки/Байкал.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Барбарис', 'src': 'images/shop/syrop/Новинки/Барбарис.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Віскі', 'src': 'images/shop/syrop/Новинки/Віскі.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Гарбуз', 'src': 'images/shop/syrop/Новинки/гарбуз.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Гострий перець', 'src': 'images/shop/syrop/Новинки/Гострий перець.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Гуава', 'src': 'images/shop/syrop/Новинки/Гуава.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Жасмин', 'src': 'images/shop/syrop/Новинки/Жасмин.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Журавлина', 'src': 'images/shop/syrop/Новинки/Журавлина.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Імбир', 'src': 'images/shop/syrop/Новинки/імбир.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Ірис', 'src': 'images/shop/syrop/Новинки/Ірис.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Кава', 'src': 'images/shop/syrop/Новинки/Кава.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Коньяк', 'src': 'images/shop/syrop/Новинки/Коньяк.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Кориця', 'src': 'images/shop/syrop/Новинки/Кориця.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Крем-сода', 'src': 'images/shop/syrop/Новинки/Крем-сода.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Лічі', 'src': 'images/shop/syrop/Новинки/Лічі.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Лохина', 'src': 'images/shop/syrop/Новинки/Лохина.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Мандарин', 'src': 'images/shop/syrop/Новинки/Мандарин.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Обліпиха', 'src': 'images/shop/syrop/Новинки/Обліпиха.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Огірок', 'src': 'images/shop/syrop/Новинки/огірок.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Ожина', 'src': 'images/shop/syrop/Новинки/Ожина.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Орео', 'src': 'images/shop/syrop/Новинки/орео.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Полуниця з вершками', 'src': 'images/shop/syrop/Новинки/полуниця з вершками.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Поп-корн', 'src': 'images/shop/syrop/Новинки/поп-корн.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Самбука', 'src': 'images/shop/syrop/Новинки/Самбука.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Солений арахіс', 'src': 'images/shop/syrop/Новинки/Солений арахіс.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Суниця', 'src': 'images/shop/syrop/Новинки/Суниця.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Тархун', 'src': 'images/shop/syrop/Новинки/Тархун.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Тростинний цукор', 'src': 'images/shop/syrop/Новинки/тростинний цукор.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Троянда', 'src': 'images/shop/syrop/Новинки/Троянда.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Фіалка', 'src': 'images/shop/syrop/Новинки/фіалка.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Черешня', 'src': 'images/shop/syrop/Новинки/Черешня.jpg','group': 'new', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Шипшина', 'src': 'images/shop/syrop/Новинки/Шипшина.jpg','group': 'new', 'price': '250₴',
            'description': ' '},


        // Преміальна група
        {'productClassName': 'Сироп', 'productName': 'Синій курасао', 'src': 'images/shop/syrop/Преміум група/Blue kuracao.jpg','group': 'premium', 'price': '250₴',
            'description': 'Смак сиропу гіркувато-солодкий одночасно. Один із найулюбленіших сиропів барменів. Використовують в алкогольних та безалкогольних коктейлях. '},
        {'productClassName': 'Сироп', 'productName': 'Диня', 'src': 'images/shop/syrop/Преміум група/Dinya.jpg','group': 'premium', 'price': '250₴',
            'description': 'Використовувати сироп можна в лимонаді, коктейлі, десерті. Ароматний і смачний, не замінний у будь-який час року.'},
        {'productClassName': 'Сироп', 'productName': 'Фісташка', 'src': 'images/shop/syrop/Преміум група/Fistashka.jpg','group': 'premium', 'price': '250₴',
            'description': 'Поєднання солодких ноток тростинного цукру з насиченими мотивами смажених фисташок - це прекрасне доповнення до багатьох напоїв і солодощів. Ідеально гармонує з кавою, коктейлями, морозивом, випічкою.'},
        {'productClassName': 'Сироп', 'productName': 'Гранат', 'src': 'images/shop/syrop/Преміум група/Granat.jpg','group': 'premium', 'price': '250₴',
            'description': 'Натуральний, кисло-солодкий смак свіжих плодів. Сироп використовують для приготування освіжаючих напоїв, коктейлів, десертів, доповненням до морозива.'},
        {'productClassName': 'Сироп', 'productName': 'Зелений банан', 'src': 'images/shop/syrop/Преміум група/Green Banan.jpg','group': 'premium', 'price': '250₴',
            'description': 'Вибуховою тропічний аромат і насичений смак стиглого зеленого банана підходить для приготування кавових напоїв, алкогольних і безалкогольних коктейлів, випічки, лимонадів.'},
        {'productClassName': 'Сироп', 'productName': 'Кавун', 'src': 'images/shop/syrop/Преміум група/Kavun.jpg','group': 'premium', 'price': '250₴',
            'description': 'Яскраво виражений і насичений смак кавуна, справжній літній смак. Використовується для приготування лимонадів та коктейлів.'},
        {'productClassName': 'Сироп', 'productName': 'Лайм', 'src': 'images/shop/syrop/Преміум група/Laim.jpg','group': 'premium', 'price': '250₴',
            'description': 'Усього кілька крапель сиропу достатньо для того, щоб надати Вашій напою ароматних ноток лайма. Використовують для приготування чаю, кавових напоїв, алкогольних коктейлів, морозива тощо.'},
        {'productClassName': 'Сироп', 'productName': 'Манго', 'src': 'images/shop/syrop/Преміум група/Mango.jpg','group': 'premium', 'price': '250₴',
            'description': 'Екзотично-солодкий смак і аромат, м\'який сиропу "Манго" ідеально підходить до напоїв, випічки і кремів.'},
        {'productClassName': 'Сироп', 'productName': 'Мохіто', 'src': 'images/shop/syrop/Преміум група/Moxito.jpg','group': 'premium', 'price': '250₴',
            'description': 'Сироп "Мохіто"- чудова основа для приготування безалкогольних чи алкогольних коктейлів. М\'ята, тростинний цукор, лайм, аромат рому лежати в основі сиропу, а сяючі блискітки додадуть вашому коктейлю неймовірного вигляду.'},
        {'productClassName': 'Сироп', 'productName': 'М\'ята', 'src': 'images/shop/syrop/Преміум група/Myata.jpg','group': 'premium', 'price': '250₴',
            'description': 'Насичений смак зеленої м\'яти чудово доповнить коктейлі, а також стане цікавим доповненням до морозива та освіжаючих напоїв.'},
        {'productClassName': 'Сироп', 'productName': 'Вишня', 'src': 'images/shop/syrop/Преміум група/Vishnia.jpg','group': 'premium', 'price': '250₴',
            'description': 'Сироп зі смаком вишні - це прекрасна можливість насолоджуватися улюбленим смаком в будь-який час року. Насичений кисло-солодкий смак з ледь відчутним ароматом вишневої кісточки, а осяйні блискітки додадуть напою ще більшої привабливості.'},

        // Сироп у стіках
        {'productClassName': 'Сироп', 'productName': 'Банан', 'src': 'images/shop/syrop/Стіки/Банан.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Апельсин', 'src': 'images/shop/syrop/Стіки/Апельсин.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Бейліс', 'src': 'images/shop/syrop/Стіки/Бейліс.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Блю Кюрасао', 'src': 'images/shop/syrop/Стіки/Блю Кюрасао.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Вишня', 'src': 'images/shop/syrop/Стіки/Вишня.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Гранат', 'src': 'images/shop/syrop/Стіки/Гранат.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Диня', 'src': 'images/shop/syrop/Стіки/Диня.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Згущене молоко', 'src': 'images/shop/syrop/Стіки/згущене молоко.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Зелений Банан', 'src': 'images/shop/syrop/Стіки/Зелений Банан.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Кавун', 'src': 'images/shop/syrop/Стіки/Кавун.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Карамель', 'src': 'images/shop/syrop/Стіки/Карамель.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Кокос', 'src': 'images/shop/syrop/Стіки/Кокос.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Лайм', 'src': 'images/shop/syrop/Стіки/Лайм.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Лісовий Горіх', 'src': 'images/shop/syrop/Стіки/Лісовий Горіх.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'М\'ята', 'src': 'images/shop/syrop/Стіки/М_ята.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Малина', 'src': 'images/shop/syrop/Стіки/Малина.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Манго', 'src': 'images/shop/syrop/Стіки/Манго.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Маракуя', 'src': 'images/shop/syrop/Стіки/Маракуя.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Мед', 'src': 'images/shop/syrop/Стіки/мед.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Полуниця', 'src': 'images/shop/syrop/Стіки/Полуниця.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Солена Карамель', 'src': 'images/shop/syrop/Стіки/Солена Карамель.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Шоколад', 'src': 'images/shop/syrop/Стіки/Шоколад.jpg','group': 'sticks-syrups', 'price': '250₴',
            'description': ' '},

        // Мед та згущене молоко
        {'productClassName': 'Сироп', 'productName': 'Мед', 'src': 'images/shop/syrop/Кавова група/Мед.jpg','group': 'honey', 'price': '50₴',
            'description': ' '},
        {'productClassName': 'Сироп', 'productName': 'Мед', 'src': 'images/shop/syrop/Стіки/мед.jpg','group': 'honey', 'price': '250₴',
            'description': 'Смак свіжого меду і карамелі, що переплітається з солодкуватим ароматом ванілі та польвих квітів. Використовується для: кави, чаю, безалкогольних коктейлів, випічки, десертів.'},
        {'productClassName': 'Сироп', 'productName': 'Згущене молоко', 'src': 'images/shop/syrop/Стіки/згущене молоко.jpg','group': 'honey', 'price': '250₴',
            'description': ' '},

        // Топінги
        {'productClassName': 'Топінг', 'productName': 'Шоколад', 'src': 'images/shop/syrop/Топінги/Chocolate.jpg','group': 'toppings', 'price': '250₴',
            'description': 'Має смак темного шоколаду та насичений аромат какао бобів. Використовується в кавових напоях, десертах, випічці.'},
        {'productClassName': 'Топінг', 'productName': 'Чорна смородина', 'src': 'images/shop/syrop/Топінги/Чорна смородина.jpg','group': 'toppings', 'price': '250₴',
            'description': 'Сироп ТМ Nelli "Чорна смородина" має насичений кисло-солодкий,злегка терпкуватий смак. Чудово доповнить ваші кавові напої,десерти,морозиво,алкогольні та безалкогольні коктейлі.'},
        {'productClassName': 'Топінг', 'productName': 'Карамель', 'src': 'images/shop/syrop/Топінги/karamel.jpg','group': 'toppings', 'price': '250₴',
            'description': 'Топпінг "Карамель" чудово поєднується з молочними коктейлями, десертами, випічкою, відмінно підійде для кави та чаю. Має неймовірний запах і смак дитинства, нагадує цукерки "Іриска".'},
        {'productClassName': 'Топінг', 'productName': 'Ківі', 'src': 'images/shop/syrop/Топінги/kivi.jpg','group': 'toppings', 'price': '250₴',
            'description': 'Топпінг Ківі має легкий смак з солодкістю і невеликою кислинкою. Відмінно підійде до десертів, млинців, випічки і морозива.'},
        {'productClassName': 'Топінг', 'productName': 'Вишня', 'src': 'images/shop/syrop/Топінги/vishnya.jpg','group': 'toppings', 'price': '250₴',
            'description': 'Топпінг "Вишня" - це смачне і яскраве доповнення для будь-яких десертів і випічки. Його кисло-солодкі ноти стиглої вишні додадуть неповторний смак, для будь-якого вашого напою, десерту або морозива.'},
        {'productClassName': 'Топінг', 'productName': 'Банан', 'src': 'images/shop/syrop/Топінги/банан.jpg','group': 'toppings', 'price': '250₴',
            'description': 'Банан є найпопулярнішим фруктом в будь якому куточку планети. Густий та насиченний смак стиглих жовтих бананів додасть особливого смаку улюбленим напоям, десертів, йогуртів.'},
        {'productClassName': 'Топінг', 'productName': 'Кокос', 'src': 'images/shop/syrop/Топінги/кокос.jpg','group': 'toppings', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Топінг', 'productName': 'Лісові ягоди', 'src': 'images/shop/syrop/Топінги/Лісові_ягоди.jpg','group': 'toppings', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Топінг', 'productName': 'Полуниця', 'src': 'images/shop/syrop/Топінги/Полуниця.jpg','group': 'toppings', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Топінг', 'productName': 'Солона карамель', 'src': 'images/shop/syrop/Топінги/Солона карамель.jpg','group': 'toppings', 'price': '250₴',
            'description': ' '},
        {'productClassName': 'Топінг', 'productName': 'Малина', 'src': 'images/shop/syrop/Топінги/Малина.jpg','group': 'toppings', 'price': '250₴',
            'description': ' '},
    ];

    //Close navigation panel on phone

    $scope.class1 = false;

    $scope.navFunction = function(){
        $scope.class1 = true;
    }
    $scope.closeNav = function(){
        angular.element(document.querySelectorAll(".navClose")).removeClass("active");
    }

    //id for products
    var number = 1;
    $scope.count = function (){
        return number++;
    }

    //visible products
    $scope.totalDisplayed = 9;

    $scope.IsVisibleButton = true;

    $scope.loadMore = function () {
        if (number >= 70){
            $scope.IsVisibleButton = false;
        }else
            $scope.totalDisplayed += 9;
    };

    });

