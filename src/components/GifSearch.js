import React, { Component } from 'react'

class GifSearch extends Component{

    constructor(){
        super()
        this.state = {
            searchKeyWords : ""
        }
    }

    handleChange = event => {
        event.persist()
        console.log('new input')
        this.setState({
            searchKeyWords: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.searchKeyWords)
        this.props.handleQuery(this.state.searchKeyWords)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' id='searchKeywords' onChange={this.handleChange}></input>
                <button type='submit'></button>
            </form>
        )
    }
}

export default GifSearch