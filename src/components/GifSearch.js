import React, { Component } from 'react'

export class GifSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             search: ''
        }
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={event => this.props.handleSubmit(event)}>
                    <label>
                    Enter a Search Term:
                    <input 
                        type="text"
                        onChange={event => this.handleSearch(event)} 
                        value={this.state.search}
                    />
                    </label>
                    <button type="submit">Find Gifs</button>
                </form>
            </div>
        )
    }
}

export default GifSearch
