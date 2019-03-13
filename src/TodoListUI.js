import React from 'react';
import { Input,Button,List  } from 'antd';
const TodoListUI = (props) => {
    return(
        <div className="todolist" style={{ marginTop: "10px",marginLeft: "10px" }}>
            <Input 
                value={props.inputValue} 
                placeholder="todo info" 
                style={{ width: "400px", marginRight: "10px" }}
                onChange = {props.handleInputChange}
                />
            <Button 
                type="primary"
                onClick = {props.handleBtnClick}
                >提交</Button>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => 
                    (<List.Item 
                        onClick={(index)=>{props.handleItemDelete(index)}}>
                        {item}
                    </List.Item>)}
                style={{ width:"400px",marginTop:"10px"}}
            />
        </div>
    )
}
export default TodoListUI;