import { widgets } from './widgets'
import { refreshItems } from './elements'
import { sideBarListPage } from './sideBar'
import { navBar, updateProjectList } from './navigationBar'
import { mainTab } from './mainPage'

const loadPage = (() => {
    const content = document.querySelector('.content')
    content.appendChild(navBar.nav)
    updateProjectList()
    const mainElements = document.createElement('div')
    mainElements.setAttribute('class', 'mainElements')
    const sideContainer = document.createElement('div')
    sideContainer.setAttribute('class', 'sideContainer')
    sideContainer.appendChild(sideBarListPage.bar)
    mainElements.appendChild(sideContainer)
    mainElements.appendChild(mainTab.tab)
    mainElements.appendChild(widgets.widgetBar.bar)
    content.appendChild(mainElements)
    refreshItems()

    const navInputList = document.querySelectorAll('.settingContainer select')
    navInputList.forEach(element => element.addEventListener('input', () => {
        refreshItems()
    }))
})()