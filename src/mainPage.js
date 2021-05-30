import { format } from 'date-fns'
import { items } from './items'
import { refreshItems } from './elements'

const mainTab = (() => {
    const tab = document.createElement('div')
    tab.setAttribute('class', 'mainTab')

    const newButton = document.createElement('button')
    newButton.setAttribute('class', 'button newButton mobileButton')
    newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="buttonSVG" width="24" height="24"' +
        ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"' +
        ' stroke-linejoin="round" display="block" id="Plus"><path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg>'


    return { tab }
})()

const mainItems = (itemName, id, project, startDate, endDate, description, color) => {
    const equals = (first, second) =>
        first.length === second.length &&
        first.every((v, i) => v === second[i]);

    const card = document.createElement('div')
    card.setAttribute('class', `card ${project}`)
    card.setAttribute('id', id)
    card.style.border = `1px solid ${color}85`
    const name = document.createElement('h3')
    name.setAttribute('class', 'cardName cardElement')
    name.innerHTML = `${itemName}`
    const projectName = document.createElement('span')
    projectName.setAttribute('class', 'cardProject cardElement')
    projectName.innerHTML = `${project}`
    const descriptionText = document.createElement('span')
    descriptionText.setAttribute('class', 'cardDescription cardElement')
    descriptionText.innerHTML = `${description}`
    const dates = document.createElement('span')
    dates.setAttribute('class', 'cardDates cardElement')

    if (!equals(startDate, endDate)) {
        dates.innerHTML = `Start: ${format(new Date(
            startDate[0],
            startDate[1],
            startDate[2],
            startDate[3],
            startDate[4]),
            'yyyy. MM. dd, HH:mm')} 
        <br /> End: ${format(new Date(
            endDate[0], 
            endDate[1], 
            endDate[2], 
            endDate[3], 
            endDate[4]), 
            'yyyy. MM. dd, HH:mm')}`
    } else if (equals(startDate, endDate)) {
        dates.innerHTML = `Date: ${format(new Date(
            startDate[0],
            startDate[1],
            startDate[2],
            startDate[3],
            startDate[4]),
            'yyyy. MM. dd, HH:mm')}`
    }

    const dropLayer = document.createElement('div')
    dropLayer.setAttribute('id', id)
    dropLayer.setAttribute('class', 'dropLayer')
    const orderList = document.querySelector('#orderSelector')
    if (orderList.options[orderList.selectedIndex].value == 'custom') {
        dropLayer.setAttribute('draggable', 'true')
        dropLayer.setAttribute('ondragover', 'event.preventDefault()')
        dropLayer.addEventListener('dragstart', event => {
            event.dataTransfer.setData("ID", event.target.id)
        })
        dropLayer.addEventListener('drop', event => {
            const selectedID = event.dataTransfer.getData("ID")
            const targetID = event.target.id
            console.log(`${selectedID} ${targetID}`)
            items.insertDropItem(selectedID, targetID)
            event.preventDefault()
            refreshItems()
        })
    }

    card.appendChild(name)
    card.appendChild(projectName)
    card.appendChild(descriptionText)
    card.appendChild(dates)
    card.appendChild(dropLayer)

    return card
}

export { mainTab, mainItems }