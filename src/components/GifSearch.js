import React, {Component} from 'react';

export default class GifSearch extends Component {
    state = {
        search: ""
    }

    handleInputChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.search) {
            return this.props.searchTerm(this.state.search)
        }
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="search">Enter a Search Term:</label>
                <input type="text" name="search" id="search" value={this.state.search} onChange={this.handleInputChange} />
                <button type="submit">Find Gifs</button>
            </form>
        </div>
    }
}