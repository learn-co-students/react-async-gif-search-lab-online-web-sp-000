import React, { Component } from 'react'

export default class GifSearch extends Component {
    state ={
        searchItem: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.searchItem)
    }

    handleChange = (event) => {
        this.setState({
            searchItem: event.target.value
        })
    }
    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type="text" name="search" value = {this.state.searchItem} onChange={event => this.handleChange(event)}></input>
                <input type="submit"/>

            </form>
        )
    }
}