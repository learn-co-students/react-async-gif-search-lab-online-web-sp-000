import React from 'react'

export default class GifSearch extends React.Component {
    constructor() {
        super()
        
        this.state = {
            query: ""
        }
    }

    handleChange = event => {
        event.persist()
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        )
    }
}