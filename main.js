/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
//import $ from 'jquery';
import App from './App.jsx';

window.$ = window.jQuery = require("jquery");

ReactDOM.render(<App />, document.getElementById('app'));
