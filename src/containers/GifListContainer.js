import React, {Component} from 'react'
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            gifs: []

        }
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch doSearch={this.doSearch}/>
            </div>
        )
    }

    doSearch = query => {
        fetch('http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC&rating=g').then(response => response.json()).then(data => this.handleData(data))
    }

    handleData = data => {
        let gifList = []
        for (let i = 0; i < 3; i++) {
            gifList.push(data["data"][i].images.original.url)
        }
        this.setState({
            gifs: gifList
        })
    }
}
