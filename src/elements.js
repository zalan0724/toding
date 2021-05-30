import { items } from "./items"
import { sideBarListPage, sideBarItem } from './sideBar'
import { mainItems } from './mainPage'
import { widgets } from './widgets'


const switchElements = (fromElement, toElement, duration) => {
    fromElement.classList.toggle('fadeAway')
    const switchAnimation = setTimeout(() => {
        fromElement.classList.toggle('fadeAway')
        toElement.classList.toggle('fadeIn')
        fromElement.parentNode.replaceChild(toElement, fromElement)
        const endAnimation = setTimeout(() => {
            document.querySelector('.fadeIn').classList.toggle('fadeIn')
            if (toElement == sideBarListPage.bar) {
                refreshItems()
            }
        }, duration)
    }, duration)
}

const emptyInputs = inputs => {
    inputs.forEach(input => {
        if (input.getAttribute('type') == 'color') input.value = '#3961e6'
        else if (input.getAttribute('type') == 'time') input.value = '00:00'
        else input.value = ''
    })
}
const refreshItems = () => {
    const orderList = document.querySelector('#orderSelector')
    const projectList = document.querySelector('#projectSelector')
    const selectedProject = projectList.options[projectList.selectedIndex].text
    const selectedOrder = orderList.options[orderList.selectedIndex].value
    items.saveList()
    const itemList = items.filteredList(selectedProject, selectedOrder)
    const sideBar = document.querySelector('.items')
    sideBar.innerHTML = ''
    const mainTab = document.querySelector('.mainTab')
    mainTab.innerHTML = ''

    //Fill sideBar
    for (let i = 0; i < itemList.length; i++) {
        if (selectedProject == 'All' || selectedProject == itemList[i].project) {
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
    widgets.calendarRender(items.intoCalendar(selectedProject))
}

export { refreshItems, emptyInputs, switchElements }