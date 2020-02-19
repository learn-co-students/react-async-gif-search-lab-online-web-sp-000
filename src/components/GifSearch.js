import React from 'react'

class GifSearch extends React.Component {
    state = {
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault();//!!!!!
        this.props.fetchAPI(this.state.query)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>enter a search term  .</label>
                    <input value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                    <input type="submit" value="Submit" />                
                    </form>
            </div>
        )
    }

}

export default GifSearch;