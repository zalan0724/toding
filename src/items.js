import { refreshItems } from "./elements"
import { format } from 'date-fns'

const items = (() => {
    let itemList = []

    const addItem = (itemName, project, startDate, endDate, description) => {
        let item = {
            name: itemName,
            id: getID(),
            project: project,
            startDate: [
                parseInt(startDate.substring(0, 4)),
                parseInt(startDate.substring(5, 7)) - 1,
                parseInt(startDate.substring(8, 10))
            ],
            endDate: [
                parseInt(endDate.substring(0, 4)),
                parseInt(endDate.substring(5, 7)) - 1,
                parseInt(endDate.substring(8, 10))
            ],
            description: description
        }

        itemList.push(item)
        console.log(itemList)
    }

    const removeItem = (id) => {
        itemList.splice(id, 1)
        for (let i = id; i < itemList.length; i++) {
            itemList[i].id--
        }
    }

    const getID = () => {
        return itemList.length
    }

    const getList = () => {
        return itemList
    }

    const intoCalendar = () => {
        let eventList = []
        for (let i = 0; i < itemList.length; i++) {
            const event = {
                title: `${itemList[i].name}`,
                start: `${itemList[i].startDate[0]}-${itemList[i].startDate[1]}-${itemList[i].startDate[2]}`,
                end: `${itemList[i].endDate[0]}-${itemList[i].endDate[1]}-${itemList[i].endDate[2]}`
            }
            eventList.push(event)
        }
        return eventList
    }

    const saveList = () => {
        localStorage['todos'] = JSON.stringify(itemList)
    }

    const restoreList = (() => {
        if (localStorage.getItem('todos') != null) {
            itemList = JSON.parse(localStorage.getItem('todos'))
        } else if (localStorage.getItem('todos') == null) {
            localStorage.setItem('todos', JSON.stringify(itemList))
        }
    })()


    return { addItem, removeItem, getList, saveList, intoCalendar }
})()


export { items }