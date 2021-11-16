import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

// import bootstrap from 'bootstrap';

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                <NavLink className="nav-link" to="/todo" >todo</NavLink> |{" "}
                <NavLink className="nav-link" to="/about" >about</NavLink>
                </div>

            </nav>
        )
    }
}
