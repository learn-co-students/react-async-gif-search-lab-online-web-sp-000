import React, { Component } from 'react'

class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    handleSubmit = (event) => {
        event.PreventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="query" value={this.state.query} onChange={event => this.setState({query: event.target.value})}></input>
                </form>
            </div>
        )
    }



} export default GifSearch
