import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    componentDidMount(){
        this.fetchGifs()
    }

    fetchGifs = (term) => {
        fetch('https://api.giphy.com/v1/gifs/search?api_key=obqKSz1koyfcc1FFZbruJFtwU5Sg3QVK&q=' + term + '&limit=25&offset=0&rating=g&lang=en')
        .then(response => response.json())
        .then(data => this.getImages(data))
    }

    render(){
        return(
            <div>
                <GifList imgs={this.state.gifs} />
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }

    getImages = (arr) => {
        let gifArray = arr.data

        this.setState({
            gifs: gifArray.slice(1,3)
        })
    }

    handleSubmit = (search) => {
        this.fetchGifs(search)
    }

}