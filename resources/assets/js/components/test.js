import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import adminmat from './adminmat';


import ReactDOM from 'react-dom';

export default class test extends Component {
    render() {
        return (
   <adminmat />
        );
    }
}

if (document.getElementById('test')) {
    ReactDOM.render(<test />, document.getElementById('test'));
}
