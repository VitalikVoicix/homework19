import React,{Component} from 'react';
import "./Contact.css";

import ManagerContact from"./ManagerContact/ManagerContact"
import male from"./male.png"
import female from"./female.png"
import unKnown from"./unknown.png"

const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male",
    },
  ];
 
class Contact extends Component{
  state = {
    contacts: [...contacts],
    search: "",
  };
   
  loadGenderImage(gender) {
    if (gender === "male") {
      return male;
    } else if (gender === "female") {
      return female;
    } else {
      return unKnown;
    }
  }
  search = (e) => {
    this.setState({ search: e.target.value
     });

    this.setState({
      contacts:[
        ...contacts.filter((el) => {
          return(
            el.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 ||
            el.lastName.toLowerCase().indexOf(e.target.value.toLowerCase()) >-1 ||
            el.phone.indexOf(e.target.value) >-1
          );
        }),
      ],
    });
  };
    render(){
  return(
    <div className="main">
        <p className="head"> Менеджери автосалону Toyota у Львові</p>
       <input type="text" 
              className="input"
              placeholder="Search"
              value={this.state.search}
             onChange={this.search}
       />
      
      {this.state.contacts.map((contact, i) => ( 
      <ManagerContact 
           firstName={contact.firstName}
           lastName={contact.lastName}
           phone={contact.phone}
           gender={this.loadGenderImage(contact.gender)}
           key={i}
      />
      ))}
    </div>
    
     )
   }
}
export default Contact