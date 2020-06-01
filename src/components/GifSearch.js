import React, {Component} from 'react';

class GifSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: undefined
        }
    }
    // handleChange = event => {
    //     event.preventDefault()
    //     this.props.changeQuery(event.target.value)
    // }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(document.getElementById("query").value)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Search: <input id="query" type='text' value={this.state.query}></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default GifSearch