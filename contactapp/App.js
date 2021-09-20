import React from "react";
import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import Navbar from "./components/Navbar";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    
    <div className="App">
      {/* Add Contact Route /add /edit/:id  */}
      <ToastContainer/>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component = {()=><Home/>}>
        
        </Route>

        <Route path="/add">
        <AddContact/>
        </Route>

        <Route exact path="/edit/:id">
        <EditContact/>
        </Route>

        </Switch>
    
    
  </div>
  );
}

export default App;
