import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifs: [],
        search: ''
    }

    fetchGifs = () => {
        let gifUrl = `https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`;
        fetch(gifUrl)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                gifs: json.data.slice(0, 3)
            })
        })
    }

    handleSubmit = item => {
        this.setState({
            search: item
        })
    }

    render() {
        return (
            <div>
                <GifList gifList={this.state.gifs} />
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }

    componentDidMount() {
        this.fetchGifs();
    }

    componentDidUpdate() {
        this.fetchGifs();
    }
}
