import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AppointmentMain from './components/AppoinmentMain/AppointmentMain/AppointmentMain';

function App() {
  return (
    <Router >
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>

       <Route exact path="/appointment">
         <AppointmentMain></AppointmentMain>
       </Route>

     </Switch>
    </Router>
  );
}

export default App;
