import React from 'react';


export default class GifSearch extends React.Component{

    state = {
        query: ""
    }

    handleChange = (e) => {
        e.persist()
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getGIFs(this.state.query)
    }

    render() {

        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" id="query" value={this.state.query} onChange={this.handleChange}></input>
                <input type="submit"></input>
            </form>
        )
    }
}