import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import PlanetPage from  './PlanetPage';
import Home from './Home';
import Menu from './Menu';
import {planets} from './planet-info';
import { IoMenu } from 'react-icons/io5';
import './App.scss';

class App extends Component {

  render () {
    return (
      <Router>
        <div className="app-container">
          <nav>
            <NavLink className="nav-logo" to="/">The Planets</NavLink>
            <div className="nav-link__wrapper">
              <NavLink id="mercury" activeStyle={{opacity: 1, borderTop: '5px solid #419EBB'}} className="nav-link" to="/planets/Mercury">Mercury</NavLink>
              <NavLink id="venus" activeStyle={{opacity: 1, borderTop: '5px solid #EDA249'}} className="nav-link" to="/planets/Venus">Venus</NavLink>
              <NavLink id="earth" activeStyle={{opacity: 1, borderTop: '5px solid #6D2ED5'}} className="nav-link" to="/planets/Earth">Earth</NavLink>
              <NavLink id="mars" activeStyle={{opacity: 1, borderTop: '5px solid #D14C32'}} className="nav-link" to="/planets/Mars">Mars</NavLink>
              <NavLink id="jupiter" activeStyle={{opacity: 1, borderTop: '5px solid #D83A34'}} className="nav-link" to="/planets/Jupiter">Jupiter</NavLink>
              <NavLink id="saturn" activeStyle={{opacity: 1, borderTop: '5px solid #CD5120'}} className="nav-link" to="/planets/Saturn">Saturn</NavLink>
              <NavLink id="uranus" activeStyle={{opacity: 1, borderTop: '5px solid #1EC1A2'}} className="nav-link" to="/planets/Uranus">Uranus</NavLink>
              <NavLink id="neptune" activeStyle={{opacity: 1, borderTop: '5px solid #2D68F0'}} className="nav-link" to="/planets/Neptune">Neptune</NavLink>
            </div>
            <Link className="hamburger-menu" to='/menu'>
              <IoMenu/>
            </Link>
          </nav>
          
          <Route exact path="/" render={() => <Home/>}/>
          <Route path="/planets/:name" render={({match}) => {
              return <PlanetPage planet={planets.find(planet => planet.name === match.params.name)}/>
            }}/>
          <Route path="/menu" render={() => <Menu/>}/>
        </div>
        </Router>
    )
  }
}

export default App;
