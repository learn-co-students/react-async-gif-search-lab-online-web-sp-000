import React from 'react'

const baseURL = 'https://api.giphy.com/v1/gifs/search?q='
const key = '&api_key=f5L1Ch31I5e2GDyJY8kVEFhDteAKiNzW'
class GifSearch extends React.Component {
    state = {
        searchTerm: ''
    }

    handleChange = e =>{
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(baseURL+this.state.searchTerm+key).then(resp=> resp.json()).then(json => this.props.setGifs(json.data))
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' id='searchTerm' onChange={this.handleChange} value={this.state.searchTerm}/>
                <input type='submit'/>
            </form>
        )
    }
}

export default GifSearch
