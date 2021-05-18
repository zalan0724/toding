import { navBar, sideBar, sideBarItem, mainTab, refreshItems } from './elements'

const loadPage = (() => {
    const content = document.querySelector('.content')
    content.appendChild(navBar.nav)
    const sideContainer = document.createElement('div')
    sideContainer.setAttribute('class', 'sideContainer')
    sideContainer.appendChild(sideBar.bar)
    content.appendChild(sideContainer)
    content.appendChild(mainTab.tab)
})()