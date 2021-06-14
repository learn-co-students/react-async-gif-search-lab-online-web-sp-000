import React, { Component } from 'react' 

export default class GifSearch extends Component {
    constructor(props) {
        super()
        this.state = {searchTerms : ""}
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }    

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state)
    }

    render() { 
        return <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.searchTerms} name="searchTerms"></input>
            <input type="submit"></input>
        </form>
    }
}