import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
// 把action放在一起提高代码的可维护性
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

