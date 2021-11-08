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
            <div>
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                    <div style={{display:'inline-block'}}>{description}</div>
                    <div style={{display:'inline-block'}}>{category} </div>

                    <button style={{border:0, backgroundColor:'transparent', color:'red'}} onClick={this.deleteHandler(id)}>
                        Delete</button>
                </label>
            </div>
        )
    }
}
