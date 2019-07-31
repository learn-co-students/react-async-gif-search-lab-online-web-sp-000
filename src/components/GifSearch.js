import React, { Component } from 'react'
import SearchBar from './SearchBar'

class GifSearch extends Component{

    constructor(props){
        super(props)
        this.state = {
            gifSearch: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearch(this.state.gifSearch)
    }

    render(){

        return (
            <SearchBar
                searchName={"gifSearch"}
                searchValue={this.state.gifSearch}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default GifSearch
