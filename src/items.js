const items = (() => {
    const itemList = []

    const addItem = (itemName, project, startDate, endDate, description) => {
        let item = {
            name: itemName,
            id: getID(),
            project: project,
            startDate: new Date(startDate[0], startDate[1], startDate[2]),
            endDate: new Date(endDate[0], endDate[1], endDate[2]),
            description: description
        }

        itemList.push(item)
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
    return { addItem, removeItem, getList }
})()

export { items }