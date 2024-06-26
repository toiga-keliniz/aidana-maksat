(function() {
    // Измененный id таймера
    var _id = "7392000aac93da8289a07cc38f812e2e";
    
    // Генерируем уникальный id, если он уже существует
    while (document.getElementById("timer" + _id)) {
        _id = _id + "0";
    }
    
    // Создаем элемент для размещения таймера
    document.write("<div id='timer" + _id + "' style='min-width:319px;height:36px;'></div>");
    
    // Создаем элемент <script> для загрузки библиотеки таймера
    var _t = document.createElement("script");
    _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
    
    // Функция инициализации таймера с новым id
    var _f = function(_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {
                "currentType": "1",
                "params": {
                    "usertime": false,
                    "tz": "6",
                    // Ваш новый timestamp или используйте Date.parse() для получения
                    "utc": Date.parse('2024-07-01T00:00:00Z')
                }
            },
            "design": {
                "type": "plate",
                "params": {
                    "round": "10",
                    "background": "solid",
                    "background-color": "#c9daf8",
                    "effect": "flipchart",
                    "space": "2",
                    "separator-margin": "20",
                    "number-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "20",
                    "number-font-color": "#000",
                    "padding": "7",
                    "separator-on": true,
                    "separator-text": ":",
                    "text-on": false,
                    "text-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "12",
                    "text-font-color": "red"
                }
            },
            "designId": 2,
            "theme": "white",
            "width": 319,
            "height": 36
        });
        
        // Запускаем таймер, если нужно
        if (_k != null) {
            l.run();
        }
    };
    
    // Устанавливаем функцию инициализации после загрузки скрипта
    _t.onload = _f;
    
    // Для старых браузеров
    _t.onreadystatechange = function() {
        if (_t.readyState == "loaded") {
            _f(1);
        }
    };
    
    // Добавляем скрипт в head документа
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);
