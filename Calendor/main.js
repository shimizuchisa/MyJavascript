'use strict'

console.clear();
{
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth(); //5月

  //先月分の日付
  function getCalendarHead() {
    const dates = [];
    const d = new Date(year, month, 0).getDate(); //先月の末日
    const n = new Date(year, month, 1).getDay();

    for(let i = 0; i < n; i++) {
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
    // console.log(dates);
  }

  //来月分の日付
  function getCalendarTail() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();//今月末日の曜日
    for(let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }

  function getCalendarBody() {
    const dates = []; //date:日付  day:曜日
    const lastDate = new Date(year, month + 1, 0).getDate(); //今月の末日
    for(let i = 1; i <= lastDate; i++) {
      dates.push({
          date: i,
          isToday: false,
          isDisabled: false,
      });
    }

    if(year === today.getFullYear() && month === today.getMonth()) {
      dates[today.getDate() - 1].isToday = true;
    }
    return dates;
  }

  function clearCalendar() {
    const tbody = document.querySelector('tbody');
    while(tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  function renderTitle() {
    const title = `${year} / ${String(month + 1).padStart(2, 0)}`; //月が１桁の時は空欄を足してあげる
    document.getElementById('title').textContent = title;
  }

  function renderWeeks() {
    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail()
    ];

    const weekRow = dates.length / 7;
    const weeks = [];
    for(let i =  0; i < weekRow; i++) {
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');
        td.textContent = date.date;
        if(date.isToday) {
          td.classList.add('today');
        }
        if(date.isDisabled) {
          td.classList.add('disabled');
        }
        tr.appendChild(td);
      });
    document.querySelector('tbody').appendChild(tr);
    });
  }

  function createCalendar() {
    clearCalendar();
    renderTitle();
    renderWeeks();
  }

  document.getElementById('prev').addEventListener('click', () => {
    month = month - 1;
    if (month < 0) {
      month = 11;
      year--;
    }
    document.getElementById('title').textContent = title;
    createCalendar();
  });

  document.getElementById('next').addEventListener('click', () => {
    month = month + 1;
    if (month > 11) {
      month = 0;
      year++;
    }
    document.getElementById('title').textContent = title;
    createCalendar();
  });

  document.getElementById('today').addEventListener('click', () => {
    year = today.getFullYear();
    month = today.getMonth();
    createCalendar();
  });

  createCalendar();

}