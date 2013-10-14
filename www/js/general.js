window.onload  = function () {


    var calendar = {
        initialize: function () {
            var now = new Date;
            this.bindEvents();
            this.createCalendar('calendar', now.getFullYear(), now.getMonth());
        },
        bindEvents: function () {

        },
        createCalendar: function createCalendar(id, year, month) {
            var weekDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
                monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                date = new Date(year, month),
                dayCount = (new Date(year, month + 1, 0)).getDate(),        // количество дней в месяце
                dayNum = 1 - (date.getDay() == 0 ? 7 : date.getDay()),      // день недели первого числа месяца

                parent = document.getElementById(id),                       // элемент, в который вставляется календарь

                table = document.createElement('table'),
                tr = document.createElement('tr'),
                elem = document.createElement("th"),
                button = document.createElement("button"),

                cell = monthName[date.getMonth()] + ' ' + date.getFullYear() + ' г';  // название месяца и года

                // листать влево
                button.setAttribute('onclick', 'calendar.createCalendar("calendar", ' + year + ', ' + (month - 1) + ')');
                button.appendChild(document.createTextNode('<'));
                elem.appendChild(button);
                tr.appendChild(elem);

                // месяц год

                elem = document.createElement('th');
                elem.setAttribute('colspan', '5');
                elem.appendChild(document.createTextNode(cell));
                tr.appendChild(elem);

                // листать вправо
                button = document.createElement("button");
                button.setAttribute('onclick', 'calendar.createCalendar("calendar", ' + year + ', ' + (month + 1) + ')');
                button.appendChild(document.createTextNode('>'));
                var elem = document.createElement("th");
                elem.appendChild(button);
                tr.appendChild(elem);

                table.appendChild(tr);

            // вторая строка шапки и тело календаря
            for (var row = 0; dayNum < dayCount; row++) { // создавать строки, если в них есть хоть один день. Актуально для некоторых февралей, например 2010г.
                var tr = document.createElement('tr');
                table.appendChild(tr);

                for (var col = 0; col < 7; col++) {  // заполняем строку днями
                    if (row == 0) {
                        // заполнение шапки календаря
                        elem = document.createElement('th');
                        cell = weekDay[col];
                    } else {
                        // заполнение тела календаря
                        dayNum++;
                        elem = document.createElement('td');
                        if ((dayNum > 0) && (dayNum <= dayCount)) {
                            elem.className = 'out';
                            cell = dayNum;
                        }
                        cell = (new Date(year, month, dayNum)).getDate();
                    }
                    // заполняем ячейку календаря
                    elem.appendChild(document.createTextNode(cell));
                    tr.appendChild(elem);
                }
            }

            parent.innerHTML = "";
            parent.appendChild(table);

            console.timeEnd('Lo');
        }

    };

    calendar.initialize();

};
