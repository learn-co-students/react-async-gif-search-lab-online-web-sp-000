import React, { Component } from 'react';

export default class GifSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {search: ''};
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            search: e.target.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input 
                        type='text'
                        name='search'
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}