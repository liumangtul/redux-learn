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
import {createStore} from 'redux';

//ACTION CREATOR---------------------------
const ADD_TODO = 'ADD_TODO';
function addTodo(num) {
    return {
        type: ADD_TODO,
        num:num
    }
}

//REDUCER---------------------------
const reducer = (state =1, action) => {
        switch (action.type) {
        case 'ADD_TODO':
            console.log(state,action)
            return state + action.num;
        default:
            return state;
    }
};

//STORE---------------------------
const store=createStore(reducer);

//DISPATCH---------------------------
const state1=store.getState();//1

store.dispatch(addTodo(5));
const state2=store.getState();//6

store.dispatch(addTodo(10));
const state3=store.getState();//16

//STATE---------------------------
const state4=store.getState();//16
console.log(state1,state2,state3,state4)//1,6,16,16

/*
* store.dispatch(addTodo(5))
*                           =>会调用reducer
* reducer里有两个参数，state，是执行reducer之前的state，action是传入进去的action creator =>addTodo(5)
*                            =>dispatch执行完后，会改变state状态
*                                                               =>调用 store.getState()获取当前的state
* */

class Component extends React.Component{
    render(){
        return <h1 className={style.h1}>Helllo React Babel ES2015 Webpack !<input/></h1>
    }
}

export {Component}