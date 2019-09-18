function getAppointement() {

  let bookedAppointement = []

  let allDates = document.querySelectorAll(".event-date");

  for (let index = 0; index < allDates.length; index++) {
    const appointement = allDates[index].innerHTML;
    appointementFormatDate = '';
    appointementFormatDate += new Date(appointement).getFullYear() + '-';

    if (Number(new Date(appointement).getMonth()) + 1 < 10) {
      appointementFormatDate += '0';
    }

    appointementFormatDate += Number(new Date(appointement).getMonth()) + 1;
    appointementFormatDate += '-' + new Date(appointement).getDate();

    bookedAppointement[index] = appointementFormatDate

  }

  return bookedAppointement;

}

const bookedAppointement = getAppointement();


const calendar = new HelloWeek({
  selector: '.myCalendar',
  lang: 'en',
  langFolder: '/js/hello-week-master/dist/langs/',
  format: 'yyyy-mm-dd',
  weekShort: true,
  monthShort: false,
  multiplePick: false,
  defaultDate: false,
  todayHighlight: true,
  daysSelected: null,
  disablePastDays: true,
  disabledDaysOfWeek: false,
  disableDates: false,
  weekStart: 0, // 0 (Sunday) to 6 (Saturday).
  daysHighlight: true,
  range: false,
  rtl: false,
  locked: false,
  minDate: false,
  maxDate: false,
  nav: ['◀', '▶'],
  daysHighlight: [],
  onLoad: () => {

    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');

    btnPrev.addEventListener('click', function () {
      reloadBookedEvents();
    })

    btnNext.addEventListener('click', function () {
      reloadBookedEvents();
    })

    reloadBookedEvents();
  },
  onChange: () => {
    reloadBookedEvents();
  }
});


function reloadBookedEvents() {
  let month = document.querySelector(".month");
  let period = document.querySelector(".period").innerHTML;
  let eventsDate = getAppointement();
  let days = month.childNodes;


  for (let index = 0; index < eventsDate.length; index++) {
    const eventDate = eventsDate[index];


    if (new Date(period).getMonth() == new Date(eventDate).getMonth() && new Date(eventDate).getFullYear() == new Date(period).getFullYear()) {
      for (let index = 0; index < days.length; index++) {

        let element = days[index];
        let getDay = element.innerHTML;

        if (new Date(eventDate).getDate() == getDay ) {
          element.classList.add('is-highlight');
        }

      }
    }

  }
}

