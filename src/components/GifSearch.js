import React, { Component } from 'react';

export default class GifSearch extends Component {

    constructor() {
        super();
    
        this.state = {
          query: ''
        };
      }

    handleChange = event => {
        this.setState({
          query: event.target.value
        })
      }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleQuery(this.state.query)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label >Enter a search term:</label>
                <input id="query" name="query" type="text" onChange={this.handleChange} value={this.state.query}/>
                <button type="submit">Search Gifs</button>
            </form>
        )
    }
}