import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

// import bootstrap from 'bootstrap';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className=" d-sm-flex d-block flex-sm-nowrap">
                        {/* <ul className="navbar-nav"> */}
                            <li className="navbar-nav nav-item h5"><NavLink className="nav-link" to="/todo" >todo</NavLink></li>
                            <li className="navbar-nav nav-item h5"><NavLink className="nav-link" to="/about" >about</NavLink></li>
                        {/* </ul> */}
                </div>
                </div>
            </nav>
        )
    }
}
