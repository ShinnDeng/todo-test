import React, { Component } from 'react'

import Nav from './components/Nav';
import Create from './components/Create';
import List from './components/List';
import Pic_ from './1.png';

import './App.css';

export default class App extends Component {
  state = {todos:[
    {id:Math.random(), description:'xxx', category:'css', done:true},
    {id:Math.random(), description:'yyy', category:'html', done:false},
    {id:Math.random(), description:'zzz', category:'javascript', done:true}
  ]}

  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodo = [...todos,todoObj]
    this.setState({todos:newTodo})
  }

  //更新checkbox的状态
  checkUpdate = (id,done)=>{
    const {todos} = this.state
    //新建数组, 遍历数组, 更改特定值
    const newTodo = todos.map((todo)=>{
      if(todo.id === id) return {...todo,done:done}
      else return todo 
    })
    this.setState({todos:newTodo})
    // console.log(this.state)
  }

  //delete Item/todo
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodo = todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({todos:newTodo})
  }

  //delete selected
  deleteSelected = ()=>{
    console.log("click");
    if(this.state.todos.done === true) return 
  }

  render(){

    // const {todos} = this.state;
    return (
      <div className="App">
        <Nav/>
        <Create addTodo={this.addTodo}/>
        {/* <List todo={todos}/> */}
        <List 
          todo={this.state.todos} 
          checkUpdate={this.checkUpdate} 
          deleteTodo={this.deleteTodo} 
          deleteSelected={this.deleteSelected}
        />
        <img src={Pic_} alt=""/>
      </div>
    );
  }
}

