import React, { Component } from 'react';

export default class GifSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        
    }

    handleOnChange = (event) => {
        console.log("e:", event.target.value);
        let v = event.target.value;
        this.setState({
            search: v
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("search:", this.state.search);
        console.log("props:", this.props.handleClickSearch)
        this.props.handleClickSearch(this.state.search)
    }

    render(){
        return(
            <div>
                <form onSubmit={ this.handleSubmit} >
                    <input type='text' value={this.state.search}  onChange={event => this.handleOnChange(event)} />
                    <button type="submit">Search</button>
                </form>
                
            </div>
        )
    }
}