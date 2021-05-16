import { navBar, sideBar, sideBarItem, mainTab } from './elements'

const loadPage = (() => {
    const content = document.querySelector('.content')
    content.appendChild(navBar.nav)
    content.appendChild(sideBar.bar)
    content.appendChild(mainTab.tab)
})()