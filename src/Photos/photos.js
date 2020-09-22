import React, { Component } from 'react'
import "./photos.css"
import toyota1 from "./toyota1.jpg"
import toyota2 from "./toyota2.jpg"
import toyota3 from "./toyota3.jpg"

export default class Photos extends Component {
    render() {
        return (
            <div className="wrapper-photos">
              <p>Aвтомобілі в салоні</p>   
                <div >
                     <img src={toyota1 } className="toyota1"alt ="toyota1"/>
                     <div className="photo1">  Camry Comfort чорний металік ціна 785 318,00 грн.* | 2020 р.в. </div>
               </div>

              <div >
                 <img src={toyota2 } className="toyota2"alt ="toyota2"/>
                 <div className="photo2">
                   C-HR 2,0 Hybrid Style сірий ціна 1 027 275,00 грн.*  </div>
              </div>
              <div >
                 <img src={toyota3 } className="toyota3"alt ="toyota3"/>
                 <div className="photo3">Land Cruser Prado Prestige "Modelista" чорний ціна 1 635 645,00 грн.*</div>
            </div>
       </div>
        )
    }
}
