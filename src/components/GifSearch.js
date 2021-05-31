import React, { Component } from "react";

export default class GifSearch extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSearch}>
                <label>
                    Search
                    <input type='text' id='query' placeholder='Search Here'
                           onChange={this.props.onChange}/>
                </label>
                <input type='submit' value='Search'/>
            </form>
        )
    }
}