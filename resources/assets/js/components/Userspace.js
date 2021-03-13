import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Menu from './Menu';
import addmat from './addmat';
export default class Userspace extends Component {
    
    render() {
       
      return (
            <Menu />
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Userspace />, document.getElementById('example'));
}
