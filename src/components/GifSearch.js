import React, { Component } from 'react';


class GifSearch extends Component {
    constructor () {
        super()
        this.state = {
            value: ""
        }
    }

    handleInputChange = (event) => {
        this.setState(
            {value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                    id="searchTerm" 
                    name="searchTerm" 
                    type="text" 
                    value={this.state.value}
                    onChange={this.handleInputChange}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }

}

export default GifSearch