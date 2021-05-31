import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {

    state = {
        query: "dog",
        images: []
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.images !== nextState.images
    }

    componentDidMount() {
        this.search(this.state.query)
    }

    search() {
        const query = this.state.query
        console.log('Searching for', query, 'gifs')
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(e => e.json())
            .then(data => this.setState( { images: this.updateImages(data.data) } ))
            .catch(e => console.log('Error getting new gifs', e))
    }

    updateImages(data) {
        data = data.slice(0, 3)
        return data.map( e => { return {id: e.id, title: e.title, url: e.images.original.url} })
    }

    renderImages = () => {
        return this.state.images.map(e => <li key={e.id}><img src={e.url} alt={e.title} id={e.id}/></li>)
    }

    submitSearch = e => {
        e.preventDefault()
        this.search()
    }

    handleQueryChange = e => {
        this.setState( { query: e.target.value })
    }

    render() {
        return(
            <div>
                <GifSearch onSearch={e => this.submitSearch(e)} onChange={this.handleQueryChange}/>
                <GifList onLoad={this.renderImages}/>
            </div>
        )
    }
}