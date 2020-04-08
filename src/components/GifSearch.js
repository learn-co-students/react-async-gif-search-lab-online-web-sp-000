import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        query: ""
    }

    clickButton = (event) => {
        event.preventDefault()
        this.props.fetchData(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.clickButton}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                </form>
            </div>
        )
    }
}