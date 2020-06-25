import React, { Component } from 'react';

export default class GifSearch extends Component {
    state = {
        entry: "",
    }

    handleEntryChange = event => {
        this.setState({
          entry: event.target.value
        })
    }

    render() {
        <div>
            <form onSubmit={event => this.props.handleSubmit(event)}>
                <input
                    type="text"
                    onChange={event => this.handleEntryChange(event)}
                    value={this.state.entry}
                />
            </form>
        </div>
    }
}