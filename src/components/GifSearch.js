import React, {Component} from 'react'

export default class GifSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }

    handleQueryChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.doSearch(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" name="query" onChange={event => this.handleQueryChange(event)} value={this.state.query} />
                    <input type="submit" name="submit" value="Search!"/>
                </form>
            </div>
        )
    }
}
