import React, { Component } from "react";

class GifSearch extends Component{

    state = {
        searchQuery: 'dog'
    }

    changeQuery = (event) => {
        event.preventDefault()
        this.setState({
            searchQuery: event.target.value
        })
    }

    render() {
        return(
            <div>
           <form>
               <input type="text" name="search" onChange={this.changeQuery}></input>
           </form>
                <button name="button" onClick={() => this.props.fetchGIFS(this.state.searchQuery)}>Search</button>
           </div>
        )
    }
}

export default GifSearch