// todo list display

import React, { Component } from 'react'
import Item from '../Item';

export default class List extends Component {
    render() {
        const {deleteSelected,todo,checkUpdate,deleteTodo,selectAll} = this.props
        
        return (
            <div className="container m-1 my-2">
            <div className="">
                
                <div><button style={{backgroundColor:'#61BEF9', color:'white'}} onClick={deleteSelected}>Delete selected</button></div>
                
                <table className="table table-striped">
                    <thead>
                        <tr className="text-center">
                            <th className="form-check-label" htmlFor="allcheck">
                                <input type="checkbox" id="allcheck" checked={this.props.allchecked} onChange={selectAll}/>
                            </th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Operate</th>
                        </tr>
                    </thead>

                    <tbody>
                        {todo.map( todo =>{
                            return <Item key={todo.id} {...todo} checkUpdate={checkUpdate} deleteTodo={deleteTodo}/>
                            })}
                    </tbody>  
                </table>
            </div>
            </div>
        )    
    }
}
