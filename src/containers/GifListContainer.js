import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component{
    state = {
        gifs: []
    }
    
    fetchGIFs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=o7Er0g7IQ5h4RcI1jkBbDiMf9gCuyXl3&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data
            })
            console.log(this.state.gifs)
        })
    }

    render() {
        return(
            <div>
                <GifSearch getGIFs={this.fetchGIFs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
