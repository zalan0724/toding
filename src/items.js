import { refreshItems } from "./elements"
import { format } from 'date-fns'

const items = (() => {
    let itemList = []

    const addItem = (itemName, project, startDate, startingTime, endDate, endingTime, description, color) => {
        let item = {
            name: itemName,
            id: getID(),
            project: project,
            startDate: [
                parseInt(startDate.substring(0, 4)),
                parseInt(startDate.substring(5, 7)) - 1,
                parseInt(startDate.substring(8, 10)),
                parseInt(startingTime.substring(0, 2)),
                parseInt(startingTime.substring(3, 5))
            ],
            endDate: [
                parseInt(endDate.substring(0, 4)),
                parseInt(endDate.substring(5, 7)) - 1,
                parseInt(endDate.substring(8, 10)),
                parseInt(endingTime.substring(0, 2)),
                parseInt(endingTime.substring(3, 5))
            ],
            description: description,
            color: color
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

    const projectList = () => {
        const projects = ['All']
        for (let i = 0; i < itemList.length; i++) {
            if (!projects.includes(itemList[i].project)) projects.push(itemList[i].project)
        }
        return projects
    }

    const getID = () => {
        return itemList.length
    }

    const getList = () => {
        return itemList
    }

    const intoCalendar = project => {
        let selectedItemList = []
        for (let i = 0; i < itemList.length; i++) {
            if (project == itemList[i].project || project == 'All') selectedItemList.push(itemList[i])
        }
        let eventList = "["


        for (let i = 0; i < selectedItemList.length; i++) {
            const event = `{
                "title": "${selectedItemList[i].name}",
                "start": "${format(new Date(
                    selectedItemList[i].startDate[0],
                    selectedItemList[i].startDate[1],
                    selectedItemList[i].startDate[2],
                    selectedItemList[i].startDate[3],
                    selectedItemList[i].startDate[4]),"yyyy-MM-dd'T'HH:mm:ss")}",
                "end": "${format(new Date(
                    selectedItemList[i].endDate[0],
                    selectedItemList[i].endDate[1],
                    selectedItemList[i].endDate[2],
                    selectedItemList[i].endDate[3],
                    selectedItemList[i].endDate[4]),"yyyy-MM-dd'T'HH:mm:ss")}",
                "backgroundColor": "${selectedItemList[i].color}",
                "borderColor": "${selectedItemList[i].color}"
            }`
            eventList += event
            if (i < selectedItemList.length - 1) eventList += ','
        }

        eventList += "]"
        return JSON.parse(eventList)
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


    return { addItem, removeItem, getList, saveList, intoCalendar, projectList }
})()


export { items }