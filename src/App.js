import React, { Component } from 'react'

import Nav from './components/Nav';
import Create from './components/Create';
import List from './components/List';
import Pic_ from './1.png';

import './App.css';

export default class App extends Component {
  state = {todos:[
    {id:Math.floor(Math.random() * 99999), description:'xxx', category:'css', done:false},
    {id:Math.floor(Math.random() * 99999), description:'yyy', category:'html', done:false},
    {id:Math.floor(Math.random() * 99999), description:'zzz', category:'javascript', done:false}
    ],
    allchecked:false
  }


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


  //delete Item/删除单个todo
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodo = todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({todos:newTodo})
  }


  selectAll = (e)=>{
    // console.log("all")
    // console.log(e.target.checked)
    const {todos} = this.state
    this.setState({allchecked:e.target.checked})

    //更新state所有item的done状态
    const newTodo = todos.map((todo)=>{
      return{...todo, done:e.target.checked}
    })
    this.setState({todos:newTodo})
  }


  //delete selected
  deleteSelected = ()=>{
    const {todos} = this.state
    const newTodo = todos.filter((todo)=>{
      return todo.done !== true
    })
    this.setState({todos:newTodo, allchecked:false})
    
  }

  render(){

    // const {todos} = this.state;
    return (
      <div className="App">
        <Nav/>
        <Create 
          addTodo={this.addTodo}
          todo={this.state.todos} 
        />
        <List 
          todo={this.state.todos} 
          checkUpdate={this.checkUpdate} 
          deleteTodo={this.deleteTodo} 
          deleteSelected={this.deleteSelected}
          selectAll={this.selectAll}
          allchecked={this.state.allchecked}
        />
        <img src={Pic_} alt=""/>
        
      </div>
    );
  }
}

