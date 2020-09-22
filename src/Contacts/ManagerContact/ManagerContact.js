import React from "react"
import "./ManagerContact.css"

const ManagerContact =({ firstName, lastName, gender, phone })=>{

return(
   <div className="contact6">
          <div className="name" >{firstName} {lastName}</div>
          <div className="phone">{phone}</div>
          <p><img className="image" src={gender}alt="img"/></p>
   </div>
  )
}
export default ManagerContact