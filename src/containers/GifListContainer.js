import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            gifs: [],
            query: "hello"
        }
    }

    gifListHandler = (searchTerms) => {
        let newQuery = searchTerms.split(' ').join('+')
        this.setState({ query: newQuery }, () => this.fetchGifs())
    }

    render() {
        return <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch gifListHandler={this.gifListHandler}/>
            </div>
    }

    componentDidMount() {
        this.fetchGifs()
    }

    fetchGifs = () => {
        let url = 'https://api.giphy.com/v1/gifs/search?q=' + this.state.query + '&api_key=VaQ9Vo00o9iph1Zlh3Mvdurreqdkb2kC&limit=3&rating=g'
        fetch(url)
        .then(resp => resp.json())
        .then(json => this.addGifsToState(json) )
    }

    addGifsToState(json) {
        let array = json.data.map( gif => gif )
        this.setState({
            gifs: array
        })
    }
}
