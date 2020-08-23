import React, { Component } from 'react';

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state ={
            value: ''
        }
    }
    stateUpdate = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form  onSubmit={() => this.props.userInput(this.state.value)}>
                    <input type='text' onChange={event => this.stateUpdate(event)}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}