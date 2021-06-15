import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state= {
        gifs: []
    }

    componentDidMount(){
        this.fetchGif
    }

    fetchGif = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
        ).then(res => res.json()).then(info => {this.setState({gifs: info.data}, () => {console.log('gifs state has been set after fetch?', this.state.gifs)}); })
    }

    submitHandler = (searchTerm) => {
        this.fetchGif(searchTerm)
        console.log('submitted to GifListContainer?', searchTerm)
    }


    render(){
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch submitHandler={this.submitHandler}/>
            </div>
        )
    }

}

export default GifListContainer