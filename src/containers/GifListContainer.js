import React, {Component} from 'react'

class GifListContainer extends React.Component{

    state = {
        gifs: []
    }

    componentDidMount(){
        const searchURL = 'https://api.giphy.com/v1/gifs/search?q=fish&api_key=dc6zaTOxFJmzC&rating=g'
        fetch(searchURL)
        .then(resp => resp.json)
        .then(data => {
            this.setState({
                gifs: data.original
            })
        })
    }

    render(){
        return (
            <div>
                <GifList />
            </div>
        )
    }
}

export default GifListContainer