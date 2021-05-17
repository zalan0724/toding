const items = (() => {
    const itemList = []

    const addItem = (itemName, project, startDate, endDate, description) => {
        let item = {
            name: itemName,
            id: getID(),
            project: project,
            startDate: new Date(
                parseInt(startDate.substring(0, 4)),
                parseInt(startDate.substring(5, 7)) - 1,
                parseInt(startDate.substring(8, 10))),
            endDate: new Date(
                parseInt(endDate.substring(0, 4)),
                parseInt(endDate.substring(5, 7)) - 1,
                parseInt(endDate.substring(8, 10))),
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
    return { addItem, removeItem, getList }
})()

export { items }