import React from 'react'

export default class GifSearch extends React.Component {

    state = { query: '' }

    handleChange = (event) => {
        this.setState({ query: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        return this.props.submitHandler(this.state.query)
    }

    render() {
        return (
            <form onSubmit={ this.submitHandler } >
                <input value={this.state.query} onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }

}