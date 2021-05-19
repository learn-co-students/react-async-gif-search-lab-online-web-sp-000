import React, { Component } from "react";

class GifSearch extends Component {
    constructor() {
        super();
        this.state = {
          query: ""
        };
    }    

    render() {
        return (
            <p>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input
                        type="text"
                        onChange={event => this.handleChange(event)}
                        value={this.state.query}
                    />
                    <input type="submit" value="Search" />
                </form>
            </p>
        );
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSearchSubmit(this.state.query)
    }
}

export default GifSearch;