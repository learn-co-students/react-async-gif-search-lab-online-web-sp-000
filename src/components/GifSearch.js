import React from 'react';

class GifSearch extends React.Component {

    state = {
        query: ""
    }

    handleChange = (event) => {
        event.persist();
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getGIFs(this.state.query);
    }

    render() {
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
              <input type="text" id="query" value={this.state.query} onChange={this.handleChange}></input>
              <input type="submit"></input>
            </form>
        )
    }
}

export default GifSearch;