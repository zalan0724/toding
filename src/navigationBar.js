import { refreshItems } from './elements'
import { items } from './items'

const updateProjectList = () => {
    const projects = [...items.projectList()]
    const projectList = document.querySelector('#projectSelector')
    projectList.innerHTML = ''
    for (let i = 0; i < projects.length; i++) {
        const option = document.createElement('option')
        option.setAttribute('value', `${projects[i].toLowerCase()}`)
        option.innerHTML = `${projects[i]}`
        projectList.appendChild(option)
    }
}

const navBar = (() => {
    const nav = document.createElement('nav')
    nav.setAttribute('class', 'nav')
    const name = document.createElement('h1')
    name.innerHTML = 'Toding'
    const projectContainer = document.createElement('div')
    const projectLabel = document.createElement('label')
    projectLabel.innerHTML = 'Projects: '
    projectLabel.setAttribute('for', 'projectSelector')
    const projectSwitcher = document.createElement('input')
    projectSwitcher.setAttribute('list', 'projectList')
    projectSwitcher.setAttribute('name', 'projectSelector')
    const projectList = document.createElement('select')
    projectList.setAttribute('id', 'projectSelector')
    nav.appendChild(name)
    projectContainer.appendChild(projectLabel)
    projectContainer.appendChild(projectList)
    nav.appendChild(projectContainer)
    return { nav }
})()


export { navBar, updateProjectList }