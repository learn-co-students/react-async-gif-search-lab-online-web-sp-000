import React from 'react';

export default class GifSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            term: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <input value={this.state.term} onChange={this.handleChange}></input>
            </form>
        )
    }
}