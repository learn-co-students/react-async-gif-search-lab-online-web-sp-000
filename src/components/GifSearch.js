import React from 'react'

class GifSearch extends React.Component {

    constructor() {
        super()

        this.state = {
            searchTerm: ''
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.props.fetchGifs(this.state.searchTerm)
    };

    render() {
        return [
            <input name='search' onChange={this.handleChange} value={this.state.searchTerm}/>
        ]
    }
}

export default GifSearch
