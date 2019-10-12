import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import GiveThings from './components/GiveThings/GiveThings';
import LogIn from './components/LogIn/LogIn'
import LogOut from './components/LogOut/LogOut';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/oddaj-rzeczy' component={GiveThings}/>
          <Route path='/logowanie' component={LogIn}/>
          <Route path='/wylogowano' component={LogOut}/>
          <Route path='/rejestracja' component={Register}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
