import React, { Component } from 'react'
import "./main.css"
import toyota from "./toyota.jpg"
export default class Main extends Component {
    render() {
        return (
            <div className="wrapper-main">
               <img src={toyota}alt="toyota" />
            </div>
        )
    }
}
