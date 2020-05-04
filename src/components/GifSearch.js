import React, { Component } from 'react'

export default class GifSearch extends Component {

   state = {
            query:  ''
    }

    handleChange = (event) => {
        event.persist()
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchImages(this.state.query)
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.query} placeholder='Enter a search term here' onChange={this.handleChange} />
            <input type="submit" />
        </form>
        )
    }
}