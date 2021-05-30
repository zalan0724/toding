import { format, addDays } from 'date-fns'
import { refreshItems } from './elements'

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

    const insertDropItem = (selectedID, targetID) => {
        if (selectedID !== targetID) {
            let selectedItem = itemList[selectedID]
            let targetItem = itemList[targetID]
            removeItem(selectedID)

            itemList.splice(targetItem.id, 0, selectedItem)
            itemList[targetItem.id].id = targetItem.id
            for (let i = 0; i < itemList.length; i++) {
                itemList[i].id = i
            }
            console.log(itemList)
        }
    }

    const syncCalendarDrop = (id, start, end) => {
        const startDate = [
            parseInt(start.substring(0, 4)),
            parseInt(start.substring(5, 7)) - 1,
            parseInt(start.substring(8, 10)),
            parseInt(start.substring(11, 13)),
            parseInt(start.substring(14, 16)),
        ]
        const endDate = [
            parseInt(end.substring(0, 4)),
            parseInt(end.substring(5, 7)) - 1,
            parseInt(end.substring(8, 10)),
            parseInt(end.substring(11, 13)),
            parseInt(end.substring(14, 16)),
        ]

        itemList[id].startDate = [...startDate]
        itemList[id].endDate = [...endDate]
        refreshItems()
    }

    const intoCalendar = project => {

        let selectedItemList = [...filteredList(project, 'custom')]
        let eventList = "["


        for (let i = 0; i < selectedItemList.length; i++) {
            const event = `{
                "id": "${selectedItemList[i].id}",
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
            addItem('Exmaple1',
                'Example',
                `${format(Date.now(),'yyyy-MM-dd')}`,
                '00:00',
                `${format(Date.now(),'yyyy-MM-dd')}`,
                '00:00',
                'This is an example event',
                '#3961e6')
            addItem('Exmaple2',
                'Example',
                `${format(addDays(Date.now(),2),'yyyy-MM-dd')}`,
                '00:00',
                `${format(addDays(Date.now(),6),'yyyy-MM-dd')}`,
                '00:00',
                'This is an example event',
                '#3961e6')
            localStorage.setItem('todos', JSON.stringify(itemList))

        }
    })()

    const filteredList = (project, order) => {
        let list = []
            //Filter List
        for (let i = 0; i < itemList.length; i++) {
            if (project == 'All' || project == itemList[i].project) {
                list.push(itemList[i])
            }
        }
        //Order List
        if (order == 'custom') return list
        else {
            list.sort(function(a, b) {
                let keyA = new Date(a.startDate[0], a.startDate[1], a.startDate[2], a.startDate[3], a.startDate[4]),
                    keyB = new Date(b.startDate[0], b.startDate[1], b.startDate[2], b.startDate[3], b.startDate[4]);
                // Compare the 2 dates
                if (keyA < keyB) return -order;
                if (keyA > keyB) return order;
                return 0;
            });

            return list
        }
    }


    return { addItem, removeItem, itemList, saveList, intoCalendar, projectList, filteredList, insertDropItem, syncCalendarDrop }
})()


export { items }