import React, { Component } from 'react'

class GifSearch extends Component {
    
    state = {
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFS(this.state.query)
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Find Gif: 
                        <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default GifSearch