import React, { Component } from 'react';

export default class GifSearch extends React.Component {
    state = {
        searchTerm: ""
    }

    handleChange = (event) => {
        this.setState({
            // [event.target.id]: event.target.value
            searchTerm: event.target.value
        })
    }

    render () {
        return (
            <form onSubmit={event => this.props.handleSubmit(event)}>
                <label>Search:</label>
                <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
            </form>
        )
    }
} 