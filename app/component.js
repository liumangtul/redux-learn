/*
//component.js
'use strict'
module.exports = function(){
    var a = 'hello word'
    return a;
}*/

'use strict'
import React from 'react'
import style from './css/component.css'

class Component extends React.Component{
    render(){
        return <h1 className={style.h1}>Helllo React Babel ES2015 Webpack </h1>
    }
}

export {Component}