// todo list display

import React, { Component } from 'react'
import Item from '../Item';

export default class List extends Component {
    render() {
        const {deleteSelected,todo,checkUpdate,deleteTodo} = this.props
        
        return (
            <div>
                <button style={{backgroundColor:'#61BEF9', color:'white'}} onClick={deleteSelected}>Delete selected</button>
                
                <ul>
                    <label>
                        <input type="checkbox" defaultChecked={false}/>
                        Description
                        Category
                        Operate
                    </label>
                    {todo.map( todo =>{
                        return <Item key={todo.id} {...todo} checkUpdate={checkUpdate} deleteTodo={deleteTodo}/>
                        })}
                    
                </ul>
            </div>
        )    
    }
}
