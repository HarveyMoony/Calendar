window.onload  = function(){


    var calendar = {
        initialize: function(){
            this.bindEvents();
            this.createCalendar('calendar', 2013, 9);
        },
        bindEvents: function(){

        },
        createCalendar: function createCalendar(id, year, month) {
            var weekDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
            var date = new Date(year, month - 1);
            var dayCount = (new Date(year, month, 0)).getDate();
            var dayNum = 1 - date.getDay();

            var parent = document.getElementById(id);
            var table = document.createElement('table');

            for (var row = 0; dayNum < dayCount; row++) {
                var tr = document.createElement('tr');
                table.appendChild(tr);

                for (var col = 0; col < 7; col++) {
                    if (row == 0) {
                        // заполнение шапки календаря
                        var elem = document.createElement('td');
                        var cell = weekDay[col];
                    } else {
                        dayNum++;
                        elem = document.createElement('td');
                        cell = ((dayNum > 0) && (dayNum <= dayCount)) ? dayNum : '';
                    }
                    // заполняем ячейку календаря
                    elem.appendChild(document.createTextNode(cell));
                    tr.appendChild(elem);
                }
            }
            parent.appendChild(table);

            console.timeEnd('Lo');
        }

    };

    calendar.initialize();

};
