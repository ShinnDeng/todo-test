import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom';

import Nav from './components/Nav';

import About from './routes/about';
import Todo from './routes/todo';


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
  
  //接收todo page信息
  dataStore = (obj)=>{
    this.setState(obj)
  }


  render(){

    // const {todos} = this.state;
    return (
      <div className="App">
        <div className="nav-bar">
          <Nav/>
        </div>
        
        <div className="content-body">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="todo" element={<Todo todo={this.state.todos} dataStore={this.dataStore}/>} />
            <Route path="about" element={<About />} />
          </Routes>
          {/* <img src={Pic_} alt=""/> */}

        </div>
       

        
      </div>
    );
  }
}

