import React, {Component} from 'react'
export default class GifSearch extends Component {
    state = {
        query: ""
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGifs(this.state.query)
    }
    render() {
        return (
            <div>
                <label>Enter a Search Term:</label>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                    <input type="submit" value="Find Gifs"></input>
                </form>
            </div>
        )
    }
}