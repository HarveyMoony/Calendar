window.onload  = function () {


    var calendar = {
        initialize: function (id, year, month) {
            var now = new Date;
            this.createCalendar(id, year, month);
            this.bindEvents(year, month);
        },
        bindEvents: function (year, month) {
            var prev_btn = document.getElementById('prev-month'),
                next_btn = document.getElementById('next-month');

            prev_btn.addEventListener('click', function(){calendar.createCalendar("calendar-table", year, (month - 1)); month -= 1}, false);
            next_btn.addEventListener('click', function(){calendar.createCalendar("calendar-table", year, (month + 1)); month += 1}, false);
        },
        createCalendar: function (id, year, month) {
            var weekDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
                monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                date = new Date(year, month),
                dayCount = (new Date(year, month, 0)).getDate(),        // количество дней в месяце
                dayNum = 1 - (date.getDay() == 0 ? 7 : date.getDay()),      // день недели первого числа месяца
                parent = document.getElementsByClassName(id)[0],            // элемент, в который вставляется календарь
                table = document.createElement('table'),
                date_txt = monthName[date.getMonth()] + ' ' + date.getFullYear() + ' г',
                date_block = document.getElementsByClassName('calendar-date')[0];  // название месяца и года

                date_block.innerHTML = date_txt;

            for (var row = 0; dayNum < dayCount; row++) { // создавать строки, если в них есть хоть один день. Актуально для некоторых февралей, например 2010г.
                var tr = document.createElement('tr');
                table.appendChild(tr);

                for (var col = 0; col < 7; col++) {  // заполняем строку днями
                    if (row == 0) {
                        // заполнение шапки календаря
                        elem = document.createElement('th');
                        date_txt = weekDay[col];
                    } else {
                        // заполнение тела календаря
                        dayNum++;
                        elem = document.createElement('td');
                        if ((dayNum > 0) && (dayNum <= dayCount)) {
                            elem.className = 'out';
                            date_txt = dayNum;
                        }
                        date_txt = (new Date(year, month, dayNum)).getDate();
                    }
                    // заполняем ячейку календаря
                    elem.appendChild(document.createTextNode(date_txt));
                    tr.appendChild(elem);
                }
            }

            parent.innerHTML = "";
            parent.appendChild(table);
        }

    };

    calendar.initialize('calendar-table', 2013, 9);

};
