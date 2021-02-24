import React, { Component } from 'react';

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render(){
        return(
            <div>
                {this.state.gifs.map(gif => <li>{gif.url}</li>)}
            </div>
        )
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=xO3iOqmjxjVcD24hvzOVIyTr266uWKRp&rating=g')
        .then(response => response.json())
        .then(data => {this.setState({gifs: data.url})})
    }
}