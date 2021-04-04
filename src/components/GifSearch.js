import React from 'react';

export default class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }
    
    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.onSubmit(this.state.searchTerm)
            }}>
              <h3>Enter a Search Term</h3>
              <input type="text" id="search-term" value={this.state.searchTerm} onChange={this.handleChange}/>
            </form>

        )
    }
 }