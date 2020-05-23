import React, { Component } from 'react';

class GifSearch extends Component {
 render() {
    return (
        <form onSubmit={event => this.props.submitHandler(event)}>
            Enter a search term:
            <input type="text"></input>
            <input type="submit" value="Find gifs"></input>
        </form>
    )
 }
}

export default GifSearch