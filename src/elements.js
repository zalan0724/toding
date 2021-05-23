import { items } from "./items"
import { sideBarListPage, sideBarAddPage, sideBarItem } from './sideBar'
import { mainTab, mainItems } from './mainPage'

const switchElements = (fromElement, toElement, duration) => {
    fromElement.classList.toggle('fadeAway')
    const switchAnimation = setTimeout(() => {
        fromElement.classList.toggle('fadeAway')
        toElement.classList.toggle('fadeIn')
        fromElement.parentNode.replaceChild(toElement, fromElement)
        const endAnimation = setTimeout(() => {
            document.querySelector('.fadeIn').classList.toggle('fadeIn')
            if (toElement == sideBarListPage.bar) refreshItems()
        }, duration)
    }, duration)
}

const emptyInputs = inputs => {
    inputs.forEach(input => { input.value = '' })
}

const refreshItems = () => {
    const itemList = items.getList()
    items.saveList()
    const sideBar = document.querySelector('.items')
    sideBar.innerHTML = ''
    const mainTab = document.querySelector('.mainTab')
    mainTab.innerHTML = ''
        //Fill sideBar
    for (let i = 0; i < itemList.length; i++) {
        sideBar.appendChild(sideBarItem(itemList[i].name, itemList[i].id, itemList[i].project))
        mainTab.appendChild(mainItems(
            itemList[i].name,
            itemList[i].id,
            itemList[i].project,
            itemList[i].startDate,
            itemList[i].endDate,
            itemList[i].description))
    }
}

export { refreshItems, emptyInputs, switchElements }