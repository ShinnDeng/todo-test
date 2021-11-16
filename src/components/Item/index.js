// todo list row item

import React, { Component } from 'react'

export default class Item extends Component {
    
    //checkbox状态传递, checkUpdate
    handleCheck = (id)=>{
        return(event)=>{
            this.props.checkUpdate(id,event.target.checked)
        }
    }

    deleteHandler = (id)=>{
        return (event)=>{
            this.props.deleteTodo(id)
        }
    }

    render() {  
        const {id,description,category,done} = this.props
        return (
            <tr className="text-center">
                <th className="form-check-label" >
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                </th>
                <td>
                    <div style={{display:'inline-block'}}>{description}</div>
                </td>
                <td>
                    <div style={{display:'inline-block'}}>{category} </div>
                </td>
                <td>    
                    <button style={{border:0, backgroundColor:'transparent', color:'red'}} onClick={this.deleteHandler(id)}>
                    Delete</button>
                </td>
                
            </tr>
        )
    }
}
