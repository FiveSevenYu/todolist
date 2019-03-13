//这里把actiontype抽离出来,好处是如果我们变量名写错了能快速定位到错误,如果是字符串则不好定位.
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';