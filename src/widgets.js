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
        const calendarEl = document.getElementById('calendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev',
                center: 'title',
                right: 'next'
            },
            initialView: 'dayGridMonth',
            eventLimit: true,
            events: eventList,
        });
        calendar.render();
        calendar.updateSize()
    }

    return { widgetBar, calendarWidget, calendarRender }
})()

export { widgetTab }