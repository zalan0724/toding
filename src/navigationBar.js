import { items } from './items'

const updateProjectList = () => {
    const projects = [...items.projectList()]
    const projectList = document.querySelector('#projectSelector')
    projectList.innerHTML = ''
    for (let i = 0; i < projects.length; i++) {
        const option = document.createElement('option')
        option.setAttribute('value', `${projects[i].toLowerCase()}`)
        if (i === 0) option.setAttribute('selected', 'selected')
        option.innerHTML = `${projects[i]}`
        projectList.appendChild(option)
    }
}

const navBar = (() => {
    const nav = document.createElement('nav')
    nav.setAttribute('class', 'nav')
    const name = document.createElement('h1')
    name.innerHTML = 'Toding'
    const settingContainer = document.createElement('div')
    settingContainer.setAttribute('class', 'settingContainer')
    const orderLabel = document.createElement('label')
    orderLabel.innerHTML = 'Order: '
    orderLabel.setAttribute('for', 'orderSelector')
    const orderList = document.createElement('select')
    orderList.setAttribute('id', 'orderSelector')
    orderList.setAttribute('list', 'orderList')
    orderList.setAttribute('name', 'orderSelector')
    orderList.style.marginRight = '10px'
    const inOrder = document.createElement('option')
    inOrder.innerHTML = 'In order'
    inOrder.setAttribute('value', '1')
    const reversed = document.createElement('option')
    reversed.innerHTML = 'Reversed'
    reversed.setAttribute('value', '-1')
    const custom = document.createElement('option')
    custom.innerHTML = 'Custom'
    custom.setAttribute('value', 'custom')
    custom.setAttribute('selected', 'selected')
    orderList.appendChild(custom)
    orderList.appendChild(inOrder)
    orderList.appendChild(reversed)

    const projectLabel = document.createElement('label')
    projectLabel.innerHTML = 'Projects: '
    projectLabel.setAttribute('for', 'projectSelector')
    const projectList = document.createElement('select')
    projectList.setAttribute('id', 'projectSelector')
    projectList.setAttribute('list', 'projectList')
    projectList.setAttribute('name', 'projectSelector')

    nav.appendChild(name)
    settingContainer.appendChild(orderLabel)
    settingContainer.appendChild(orderList)
    settingContainer.appendChild(projectLabel)
    settingContainer.appendChild(projectList)
    nav.appendChild(settingContainer)
    return { nav }
})()


export { navBar, updateProjectList }