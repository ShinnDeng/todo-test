import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <NavLink to="/todo" >todo</NavLink> |{" "}
                <NavLink to="/about" >about</NavLink>
            </div>
        )
    }
}
