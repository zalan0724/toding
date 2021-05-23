import { refreshItems } from './elements'
import { sideBarListPage } from './sideBar'
import { navBar } from './navigationBar'
import { mainTab } from './mainPage'
import { widgetTab } from './widgets'
import { items } from './items'

const loadPage = (() => {
    const content = document.querySelector('.content')
    content.appendChild(navBar.nav)
    const mainElements = document.createElement('div')
    mainElements.setAttribute('class', 'mainElements')
    const sideContainer = document.createElement('div')
    sideContainer.setAttribute('class', 'sideContainer')
    sideContainer.appendChild(sideBarListPage.bar)
    mainElements.appendChild(sideContainer)
    mainElements.appendChild(mainTab.tab)
    mainElements.appendChild(widgetTab.widgetBar.bar)
    content.appendChild(mainElements)
    refreshItems()
    widgetTab.calendarRender(items.intoCalendar())
})()