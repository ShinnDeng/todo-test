import React, { Component } from 'react'

import Create from '../../components/Create';
import List from '../../components/List';


export default class Todo extends Component {
  // constructor(props){
  //   super();
  //   console.log("constructor");

  //   this.componentDidMount = this.componentDidMount.bind(this);
  // }
  
  state = {
    todos:[],
    allchecked:false,

  }  

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props.dataReceived)
  //   console.log(state);
  //   if (props.dataReceived.key !== state.key) {
  //     console.log("key change");
  //   }
  //   return null;
  // }


  componentDidMount(){
    this.setState({todos:this.props.todos, allchecked:this.props.allchecked})
    // console.log(this.state)
    // console.log("todo mount")
    // console.log(this.state)
    
  }

  //组件卸载时传输数据
  componentWillUnmount() {
    // console.log("todo unmount");
    // console.log(this.props.dataStore);
    this.props.dataStore({...this.state})
  }



  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodo = [...todos,todoObj]
    this.setState({todos:newTodo, allchecked:false})
    // const newState = this.state.todos
    // this.props.dataStore(newState)
    
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

    //cancel select all
    if(done === false) this.setState({allchecked:false})

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


  render() {

    return (
      <div>
        <div className="container">
          <Create 
            addTodo={this.addTodo}
            todo={this.state.todos} 
          />
        </div>
        <div className="container py-3 px-0" style={{border:'1px solid'}}>
          <List 
            todo={this.state.todos} 
            checkUpdate={this.checkUpdate} 
            deleteTodo={this.deleteTodo} 
            deleteSelected={this.deleteSelected}
            selectAll={this.selectAll}
            allchecked={this.state.allchecked}
          />
        </div>
      </div>
    )}
}
