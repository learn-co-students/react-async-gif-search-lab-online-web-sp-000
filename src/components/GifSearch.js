import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        userinput: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="userinput" value={this.state.userinput}></input>
            </form>
        )
    }
}

export default GifSearch