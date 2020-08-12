import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer'

export default class GifSearch extends Component {
    
    state = {
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.submitHandler(this.state.query)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({
                        query: event.target.value
                    })} />
                </form>
            </div>
        )
    }


}