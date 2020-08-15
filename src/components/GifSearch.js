import React, { Component } from 'react'

export default class GifSearch extends Component {

    

    render () {
        return (
            <form onSubmit={this.props.handleData}>
                <input 
                    onChange={this.props.handleSearchParam} 
                    value={this.props.searchParam}></input>
                <input type='submit'></input>
            </form>
        )
    }
}