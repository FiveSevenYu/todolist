import React, { Component } from 'react';

import store from './store';
import 'antd/dist/antd.css';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'


class TodoList extends Component { 
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete =this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return(
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            /> 
        )
    }
    //当感知到store发生改变的时候,调用setState用getState来从store中获取新的state
    handleStoreChange() {
        this.setState(store.getState());
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;