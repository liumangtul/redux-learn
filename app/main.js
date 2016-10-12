/*
//main.js
'use strict'
var component = require('./component.js');
document.body.innerHTML = component();*/

'use strict'
import 'babel-polyfill'
import React from 'react'
import reactDOM from 'react-dom'
import {Component} from './component'


window.onload = function(){
    reactDOM.render(<Component />,document.getElementById('main'))
}