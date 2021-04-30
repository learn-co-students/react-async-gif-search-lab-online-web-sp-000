import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        item: ''
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
             item: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.item} name="item" onChange={this.handleChange} />
                <button type='submit' onClick={() => {this.props.handleSubmit(this.state.item)}} >Search Gif</button> 
            </div>
        )
    }
}