/*
//main.js
'use strict'
var component = require('./component.js');
document.body.innerHTML = component();*/

'use strict'
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Component} from './component'

let main = function(){
    render(<Component />,document.getElementById('main'))
}
window.onload = function(){
    main()
}