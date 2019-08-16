import React, { Component } from 'react';
class GifSearch extends Component {
    state = { 
        search: ''
    }
    
    onInputChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.searchSubmit(this.state.search)
        this.setState({
            search: ''
        })
    }

    render() { 
        return ( 
        
        <div>
            <form onSubmit={this.onSubmit}>
                <input type="text" value={this.state.search} onChange={this.onInputChange}/>
                <input type="submit"/>
            </form>
        </div> );
    }
}
 
export default GifSearch;