import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.search(this.state.searchTerm)
    }

    render() {
        console.log(this.state)
        return <div>
            <form onSubmit={this.handleSubmit} >
                <input type="text" value={this.state.searchTerm} onChange={e => this.setState({searchTerm: e.target.value})} ></input>
            </form>
        </div>
    }
}

export default GifSearch