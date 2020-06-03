import React, { Component } from 'react';

export default class GifSearch extends Component {
    state = {
        input: ""
    }

    handleChange = event => {
        this.setState({
            input: event.target.value
        })
        
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" onChange={event => this.handleChange(event)} value={this.state.input}/>
            </form>
        )
    }
}