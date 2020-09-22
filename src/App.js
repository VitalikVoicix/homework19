import React from 'react';
import {HashRouter,Redirect,Route,Switch} from "react-router-dom";
import './App.css';
import Header from "./Header/Header"
import Main from "./Main/main"
import Photos from './Photos/photos';
import Post from"./Posts/Post"
import Contact from"./Contacts/Contacts"



function App() {
  return (
    <div className="App">
     <HashRouter>
         <Header /> 
              <Switch>
                  <Route  path="/" exact render={()=> <Redirect to="/home" />}/> 
                    <Route path="/home">
                        <Main />
                   </Route>
                   <Route path="/posts">
                        <Post />
                   </Route>
                   <Route path="/photos">
                        <Photos />
                  </Route>
                   <Route path="/contacts">
                        <Contact />
                   </Route>
              </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
