import React, { Component } from 'react'

export default class GifSearch extends Component{
    constructor(){
        super()
        this.state = { currentSearch: "" }
    }

    handleChange = (event) => {
        this.setState({
            currentSearch: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let searchVal = this.state.currentSearch
        return(searchVal => this.props.submitForm(searchVal))
    }

    render(){
        return(
            <div className= "SelectionContainer">
                <form onSubmit ={this.props.submitForm(this.state)}>
                    <input type="text" name="sel" value={this.state.currentSearch}
                     onChange={event => this.handleChange(event)} />
                     <input type='submit' name="Submit" />
                </form>
            </div>
        )
    }
}