import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import addmat from './addmat';
import affichemat from './affichemat';
import afficheinc from './afficheinc';

import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
   <Router>   
    <div className="sidebar" id="bg" data-color="blue"  >
    


    	<div className="sidebar-wrapper">
            <div className="logo">
                <a href="#" className="simple-text">
                   ANTIPANNE<sub>APP</sub>
                </a>
            </div>

            <ul className="nav">
                <li className="active">
                    <a href="dashboard.html"  id="navli">
                        <i className="pe-7s-graph"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li >
                    <a href="user.html" id="navli">
                        <i className="pe-7s-user"></i>
                        <p>User Profile</p>
                    </a>
                </li>
                <li>
                    <Link to="/affichemat"  id="navli">
                        <i className="pe-7s-note2" ></i>
                        <p>Votre Materiels</p>
                   </Link>
                </li>
                <li>
                    <Link to="/addmat"  id="navli">
                        <i className="pe-7s-news-paper"></i>
                        <p>Add materiel</p>
                    </Link>
                </li>
                <li>
                    <Link to="/afficheinc"  id="navli">
                        <i className="pe-7s-note2"></i>
                        <p>Les incidents</p>
                   </Link>
                </li> <br />
                <li>
                    <Link to="#" id="navli">
                        <i className="pe-7s-map-marker" ></i>
                        <p>Mise a jour </p>
                   </Link>
                </li>
                <li>
                    <a href="notifications.html"  id="navli">
                        <i className="pe-7s-bell"></i>
                        <p>Notifications</p>
                    </a>
                </li>
				
            </ul>
    	</div>
    </div>
 <Route exact path='/addmat' component={addmat} />
 <Route exact path='/affichemat' component={affichemat} />
 <Route exact path='/afficheinc' component={afficheinc} />

    </Router>

        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
