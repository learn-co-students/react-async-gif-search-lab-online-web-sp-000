import React, {Component} from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    render() {
        return(
            <form>
                <input id="input" name="searchInput" type="text" onChange={(event) => {this.handleChange(event)}} value={this.state.searchInput}/>
                <button onSubmit={(event) => {this.props.handleSubmit(event)}}>Find Gif</button>
            </form>
        )
    }
}