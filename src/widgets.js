import { items } from './items'

const widgetTab = (() => {

    const calendarWidget = (() => {
        const calendar = document.createElement('div')
        calendar.setAttribute('class', 'calendar calendarWidget')
        calendar.setAttribute('id', 'calendar')

        return { calendar }
    })()

    const widgetBar = (() => {
        const bar = document.createElement('div')
        bar.setAttribute('class', 'widgetBar')
        bar.appendChild(calendarWidget.calendar)
        return { bar }
    })()

    const calendarRender = eventList => {
        const newEvents = eventList.slice()
        const calendarEl = document.getElementById('calendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev',
                center: 'title',
                right: 'next'
            },
            initialView: 'dayGridMonth',
            events: newEvents,
        });
        console.log(newEvents)
        calendar.render();
    }

    return { widgetBar, calendarWidget, calendarRender }
})()

export { widgetTab }