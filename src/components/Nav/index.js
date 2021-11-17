import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

// import bootstrap from 'bootstrap';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light border-bottom border-dark border-1">
                <div className="container">
                    <div className="navbar-nav">
                        {/* <ul className="navbar-nav"> */}
                            <li className="nav-item h5 mx-2"><NavLink className="nav-link" to="/todo" >todo</NavLink></li>
                            <li className="nav-item h5 mx-2"><NavLink className="nav-link" to="/about" >about</NavLink></li>
                        {/* </ul> */}
                </div>
                </div>
            </nav>
        )
    }
}
