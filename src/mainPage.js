import { format } from 'date-fns'

const mainTab = (() => {
    const tab = document.createElement('div')
    tab.setAttribute('class', 'mainTab')

    return { tab }
})()

const mainItems = (itemName, id, project, startDate, endDate, description) => {
    const card = document.createElement('div')
    card.setAttribute('class', `card ${project}`)
    card.setAttribute('id', id)
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
    dates.innerHTML = `${format(new Date(startDate[0], startDate[1], startDate[2]), 'yyyy. MM. dd')}
     - ${format(new Date(endDate[0], endDate[1], endDate[2]), 'yyyy. MM. dd')}`

    card.appendChild(name)
    card.appendChild(projectName)
    card.appendChild(descriptionText)
    card.appendChild(dates)

    return card
}

export { mainTab, mainItems }