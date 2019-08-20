import React, { Component } from 'react';

export default class GifSearch extends Component {
    constructor(){
        super()
        this.state={
            query: ''
        }
    }

    changeHandler(event){
        this.setState({
            query: event.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={event => this.props.submitHandler(event, this.state.query)}>
                    <input type="text" value={this.state.query} name="query" id="query" onChange={event => this.changeHandler(event)} />
                    <button type="submit">Find Gifs</button>
                </form>
            </div>
        )
    }
}