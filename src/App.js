import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom';
// import bootstrap from 'bootstrap';

import Nav from './components/Nav';

import About from './routes/about';
import Todo from './routes/todo';


import './App.css';


export default class App extends Component {

  state = {
    todos:[],
    allchecked:false,
  } 
  
  //接收todo的data信息
  dataStore = (data)=>{
    // console.log(data)
    this.setState({...data})
  }


  render(){
    // console.log("app render")
    // const {todos} = this.state;
    return (
      <div className="App">
        <div>
          <Nav/>
        </div>
        
        <div className="content-body">
          <Routes>
            <Route path="/" element={<Todo dataStore={this.dataStore} {...this.state}/>} />
            <Route path="todo" element={<Todo dataReceived={this.state} dataStore={this.dataStore} {...this.state}/>} />
            <Route path="about" element={<About save={this.state}/>} />
          </Routes>

        </div>

      </div>
    );
  }
}

