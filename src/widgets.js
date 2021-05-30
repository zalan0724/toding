import { format } from "date-fns"
import { items } from "./items"

const widgets = (() => {

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
        const calendarEL = document.getElementById('calendar')
        const calendar = new FullCalendar.Calendar(calendarEL, {
            headerToolbar: {
                left: 'prev',
                center: 'title',
                right: 'next'
            },
            editable: true,
            eventDrop: function(element) {
                const startDate = format(new Date(element.event.start), 'yyyy-MM-dd-HH-mm')
                const endDate = format(new Date(element.event.end), 'yyyy-MM-dd-HH-mm')
                const id = element.event.id
                items.syncCalendarDrop(id, startDate, endDate.substring(0, 4) == '1970' ? startDate : endDate)
            },
            dayMaxEventRows: 3,
            initialView: 'dayGridMonth',
            events: eventList,
        });
        calendar.render();
        calendar.updateSize()
    }

    return { widgetBar, calendarWidget, calendarRender }
})()

export { widgets }