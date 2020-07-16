import React from 'react'

export default class GifSearch extends React.Component {

    state = {
        search: ""
    }

    handleSearchInput = event => {
        this.setState({
            search: event.target.value
        })
    }

    render(){
        return(
            <form onSubmit={event => {event.preventDefault(); this.props.handleSubmit(this.state.search)}}>
                <b> Enter a search term: </b>
                <input type="text" name="search" value={this.state.search} onChange={this.handleSearchInput} />
                <input type="submit" />
            </form>
        )
    }

}