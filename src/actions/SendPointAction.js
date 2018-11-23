export const AddNewItem = (listData = []) => {
    return {
        type : 'ADD_ITEM',
        payload : {
            name : listData
        }
    }
}