import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import Generador from './generador/Generador';
import Como from './como/Como'
import Contacto from './contacto/Contacto'

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Navbar />

        <Switch>
          <Route exact path="/" component={Generador}></Route>
          <Route exact path="/como" component={Como}></Route>
          <Route exact path="/contacto" component={Contacto}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
