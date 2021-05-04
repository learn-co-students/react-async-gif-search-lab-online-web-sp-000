import React, { Component } from "react";

export default class GifSearch extends Component{
    constructor(){
        super()
        this.state = {
            type: ''
        }  
    }

    handleChange = (event) =>{
        this.setState({
            type: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.props.submitHandler}>
                <input value={this.state.type} onChange={this.handleChange}></input>
            </form>
        )
    }
}