// Code Keypad Component Here

import React, { Component } from 'react'

export default class Keypad extends Component{

    handlerKeyUp = (event) => {
        console.log("Entering password...")
    }

    render (){
        return (
            <input onKeyUp = { this.handlerKeyUp } type="password" />
        )
    }
}

