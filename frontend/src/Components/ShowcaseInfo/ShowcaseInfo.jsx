import React from 'react'
import {Component} from 'react'
import Hamburger from '../Hamburger/Hamburger'

export default class ShowcaseInfo extends Component{
    render(){
        return(
        <div>
            <Hamburger bgColor="blueBgColor"/>
            This is a showcase! 
        </div>
        )
    }
}