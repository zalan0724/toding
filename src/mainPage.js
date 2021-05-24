import { format } from 'date-fns'

const mainTab = (() => {
    const tab = document.createElement('div')
    tab.setAttribute('class', 'mainTab')

    return { tab }
})()

const mainItems = (itemName, id, project, startDate, endDate, description, color) => {
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
    dates.innerHTML = `Start: ${format(new Date(
        startDate[0],
        startDate[1],
        startDate[2],
        startDate[3],
        startDate[4]),
        'yyyy. MM. dd, HH:mm')}
     <br /> End: ${format(new Date(endDate[0], 
        endDate[1], 
        endDate[2], 
        endDate[3], 
        endDate[4]), 
        'yyyy. MM. dd, HH:mm')}`

    card.appendChild(name)
    card.appendChild(projectName)
    card.appendChild(descriptionText)
    card.appendChild(dates)

    return card
}

export { mainTab, mainItems }