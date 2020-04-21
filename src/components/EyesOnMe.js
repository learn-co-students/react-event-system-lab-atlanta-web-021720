// Code EyesOnMe Component Here

 import React, { Component } from 'react'

 export default class EyesOnMe extends Component {

    handlerFocus = (event) => {
        console.log("Good!")
    }

    handlerBlur = ()=> {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button onFocus = { this.handlerFocus } onBlur = { this.handlerBlur } > </button>
        )
    }
 }

