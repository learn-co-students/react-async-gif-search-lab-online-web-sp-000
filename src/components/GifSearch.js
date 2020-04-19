import React from 'react'


export default class GifSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ""
        };
    }

    showQuery = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchData(this.state.query)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <strong>Search:</strong>
                <input 
                    type="text"
                    name="search"
                    onChange={event => this.showQuery(event)}
                    value={this.state.query}>
                </input>
                </form>
            </div>
        )
    }

}

//receives user input for giphy search
//controlled component- stores input in state
//on submit, invoke callback fetchData prop with value of text input

