import { items } from "./items"
import { sideBarListPage, sideBarAddPage, sideBarItem } from './sideBar'
import { mainTab, mainItems } from './mainPage'
import { widgetTab } from './widgets'
import { intervalToDuration } from "date-fns"

const switchElements = (fromElement, toElement, duration) => {
    fromElement.classList.toggle('fadeAway')
    const switchAnimation = setTimeout(() => {
        fromElement.classList.toggle('fadeAway')
        toElement.classList.toggle('fadeIn')
        fromElement.parentNode.replaceChild(toElement, fromElement)
        const endAnimation = setTimeout(() => {
            document.querySelector('.fadeIn').classList.toggle('fadeIn')
            if (toElement == sideBarListPage.bar) {
                const list = document.querySelector('#projectSelector')
                const value = list.options[list.selectedIndex].text
                refreshItems(value)
            }
        }, duration)
    }, duration)
}

const emptyInputs = inputs => {
    inputs.forEach(input => {
        if (input.getAttribute('type') != 'color') input.value = ''
        else input.value = '#3961e6'
    })
}

const refreshItems = project => {
    const itemList = items.getList()
    items.saveList()
    const sideBar = document.querySelector('.items')
    sideBar.innerHTML = ''
    const mainTab = document.querySelector('.mainTab')
    mainTab.innerHTML = ''
        //Fill sideBar
    for (let i = 0; i < itemList.length; i++) {
        if (project == 'All' || project == itemList[i].project) {
            sideBar.appendChild(sideBarItem(
                itemList[i].name,
                itemList[i].id,
                itemList[i].project,
                itemList[i].color))
            mainTab.appendChild(mainItems(
                itemList[i].name,
                itemList[i].id,
                itemList[i].project,
                itemList[i].startDate,
                itemList[i].endDate,
                itemList[i].description,
                itemList[i].color))
        }
    }
    widgetTab.calendarRender(items.intoCalendar(project))
}

export { refreshItems, emptyInputs, switchElements }