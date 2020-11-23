import React from 'react'

export default class GifSearch extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" id="terms" value={this.props.terms} onChange={event => this.props.handleInputChange(event)}></input>
                <input type="submit" value="Find Gifs"></input>
            </form>
        )
    }
}