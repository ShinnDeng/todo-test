// create todo item

import React, { Component } from 'react'


export default class Create extends Component {
    
    constructor(props){
        super();
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    state = {
        description:"",
        category:'',
        content:"",
    }


    //更新状态
    inputChangeHandler(event){
        const {name,value} = event.target
        // console.log(event.target.value, event.target.name)
        this.setState({
            [name]: value
        })
        // this.setState(()=>{
        //     return {name:name, content:value}
        // })
        // console.log(this.state)
    }


    //submit
    addHandler = ()=>{
        //invalid input
        if(this.state.description.trim() === '') return alert("description为空");
        const {description,category,content} = this.state;
        const todoObj = {   
            id:Math.random(), 
            description:description, 
            category:category, 
            content:content,
            done:false
        }
        // console.log(todoObj)
        //传递打包对象
        this.props.addTodo(todoObj)

        //清空当前页面
        
        this.setState({
            description:"",
            category:'',
            content:""
        })
            
    }
    
    render() {
        return (
            <div>
                <div>
                    Description: <input value={this.state.description} name="description" onInput={this.inputChangeHandler}/>

                </div>
                <div>
                    Category:
                    <select value={this.state.category} name="category" onChange={this.inputChangeHandler}>
                        <option disabled="disabled" style={{display: 'none'}} value=''></option>
                        <option value="css">css</option>
                        <option value="html">html</option>
                        <option value="javascript">javascript</option>
                    </select>
                </div>
                <div>
                    Content: <form style={{display:'inline-block'}}>
                    <textarea value={this.state.content} onInput={this.inputChangeHandler} name="content"/>
	                </form>
                </div>
                <button onClick={this.addHandler} name="submit">Submit</button>
            </div>
        )
    }
}
