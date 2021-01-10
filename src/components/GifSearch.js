import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        query: ''
    }    

    handleSubmit = event => { 
        event.preventDefault() 
        this.props.fetchGifs(this.state.query)
    }

      render() {
        return (
        <form style={{ float: "right", margin: "30px"}} onSubmit={this.handleSubmit}>
            Enter a Search Term:   
            <input
                type="text"
                value={this.state.query}
                onChange={event => this.setState({query: event.target.value})}
            />
            <button style={{ backgroundColor: "lime"}}>Find Gifs</button>
          </form>
        )
      }

}

export default GifSearch