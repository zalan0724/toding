import { switchElements, emptyInputs, refreshItems } from "./elements"
import { items } from './items'
import { updateProjectList } from './navigationBar'

const sideBarListPage = (() => {
    const bar = document.createElement('section')
    bar.setAttribute('class', 'sideBar')
    const title = document.createElement('h2')
    title.innerHTML = 'Your tasks'
    title.setAttribute('class', 'sideBarTitle')
    const items = document.createElement('div')
    items.setAttribute('class', 'items')
    const newButton = document.createElement('button')
    newButton.setAttribute('class', 'button newButton')
    newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="buttonSVG" width="24" height="24"' +
        ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"' +
        ' stroke-linejoin="round" display="block" id="Plus"><path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg>'

    newButton.addEventListener('click', () => {
        switchElements(document.querySelector('.sideBar'),
            sideBarAddPage.bar,
            190)
    })
    bar.appendChild(title)
    bar.appendChild(items)
    bar.appendChild(newButton)

    return { bar }
})()

const sideBarItem = (nameIn, idIn, projectIn, colorIn) => {
    const itemBox = document.createElement('div')
    itemBox.setAttribute('id', `${idIn}`)
    itemBox.setAttribute('class', 'listItem')
    itemBox.style.borderBottom = `1px solid ${colorIn}`
    const textConatiner = document.createElement('div')
    textConatiner.setAttribute('class', 'textContainer')
    const name = document.createElement('h3')
    name.innerHTML = `${nameIn}<br/>`
    const project = document.createElement('span')
    project.innerHTML = `${projectIn}`
    textConatiner.appendChild(name)
    textConatiner.appendChild(project)
    itemBox.appendChild(textConatiner)

    const buttonContainer = document.createElement('div')
    buttonContainer.setAttribute('class', 'buttonContainer')
    const editButton = document.createElement('button')
    editButton.innerHTML = ''
        /*'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ' +
        'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
        'display="block" id="Edit"><path d="M16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 ' +
        '00-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 10-2.621-2.621z"/>' +
        '<path d="M19 15v3a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h3"/></svg>'*/
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"' +
        'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' +
        ' display="block" id="TrashCan"><path d="M4 6h16l-1.58 14.22A2 2 0 0116.432 22H7.568a2 2 0 ' +
        '01-1.988-1.78L4 6z"/><path d="M7.345 3.147A2 2 0 019.154 2h5.692a2 2 0 011.81 1.147L18 6H6l1.345-2.853z"/>' +
        '<path d="M2 6h20"/><path d="M10 11v5"/><path d="M14 11v5"/></svg>'
    deleteButton.addEventListener('click', () => {
        items.removeItem(idIn)
        refreshItems()
        updateProjectList()
    })

    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)
    itemBox.appendChild(buttonContainer)

    return itemBox
}

const sideBarAddPage = (() => {
    const bar = document.createElement('section')
    bar.setAttribute('class', 'sideBar')
    const title = document.createElement('h2')
    title.innerHTML = 'Adding'
    bar.appendChild(title)
    const inputs = ['Name', 'Project', 'Starting Date', 'Ending Date', 'Description', 'Color']
    const types = ['text', 'text', 'date', 'date', 'text', 'color']
    const require = [true, true, true, false, false, true]
    for (let i = 0; i < inputs.length; i++) {
        const inputLabel = document.createElement('label')
        inputLabel.setAttribute('for', `${inputs[i].replace(' ','')}`)
        const inputName = document.createElement('h3')
        inputName.style.marginBottom = '5px'
        inputName.innerHTML = `${inputs[i]}`
        const inputBox = document.createElement('input')
        inputBox.setAttribute('class', 'inputBox')
        inputBox.setAttribute('id', `${'add'+inputs[i].replace(' ','')}`)
        inputBox.setAttribute('name', `${inputs[i].replace(' ','')}`)
        inputBox.setAttribute('type', `${types[i]}`)
        inputBox.required = require[i]
        if (types[i] == 'color') {
            inputBox.defaultValue = '#3961e6'
        }
        inputLabel.appendChild(inputName)
        bar.appendChild(inputLabel)
        bar.appendChild(inputBox)
        if (types[i] == 'date') {
            const inputTimeBox = document.createElement('input')
            inputTimeBox.setAttribute('class', 'inputBox')
            inputTimeBox.setAttribute('id', `${'addTime'+inputs[i].replace(' ','')}`)
            inputTimeBox.setAttribute('name', `${inputs[i].replace(' ','')}`)
            inputTimeBox.setAttribute('type', 'time')
            inputTimeBox.required = true
            inputTimeBox.value = '00:00'
            bar.appendChild(inputTimeBox)
        }

    }

    //Add button

    const addButton = document.createElement('button')
    addButton.setAttribute('class', 'button addButton')
    addButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"' +
        'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' +
        ' display="block" id="Check"><path d="M4 12l6 6L20 6"/></svg>'
    addButton.addEventListener('click', () => {
        const name = document.querySelector('#addName')
        const project = document.querySelector('#addProject')
        const startDate = document.querySelector('#addStartingDate')
        const endDate = document.querySelector('#addEndingDate')
        const startingTime = document.querySelector('#addTimeStartingDate')
        const endingTime = document.querySelector('#addTimeEndingDate')
        const description = document.querySelector('#addDescription')
        const color = document.querySelector('#addColor')
        if (name.checkValidity() &&
            project.checkValidity() &&
            startDate.checkValidity() &&
            startingTime.checkValidity() &&
            color.checkValidity()) {

            items.addItem(
                name.value,
                project.value,
                startDate.value,
                startingTime.value,
                endDate.value == '' ? startDate.value : endDate.value,
                endingTime.value,
                description.value,
                color.value)
            emptyInputs(document.querySelectorAll('.sideBar input'))
            switchElements(document.querySelector('.sideBar'),
                sideBarListPage.bar,
                190)
            updateProjectList()
        }
    })
    bar.appendChild(addButton)

    //Cancel button

    const cancelButton = document.createElement('button')
    cancelButton.setAttribute('class', 'button cancelButton')
    cancelButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"' +
        ' fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"' +
        ' display="block" id="Cross" style="width: 75%; height: 75%"><path d="M20 20L4 4m16 0L4 20"/></svg>'
    cancelButton.addEventListener('click', () => {
        emptyInputs(document.querySelectorAll('.sideBar input'))
        switchElements(document.querySelector('.sideBar'),
            sideBarListPage.bar,
            190)
    })
    bar.appendChild(cancelButton)

    return { bar }
})()


export { sideBarListPage, sideBarAddPage, sideBarItem }