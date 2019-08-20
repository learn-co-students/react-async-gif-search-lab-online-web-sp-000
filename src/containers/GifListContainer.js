import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor(){
        super()
        this.state={
            gifs: []
        }
    }

    submitHandler = (event, query) => {
        event.preventDefault();

        const endPoint1 = 'http://api.giphy.com/v1/gifs/search?q='
        const endPoint2 = '&api_key=dc6zaTOxFJmzC&rating=g'

        fetch(endPoint1 + query + endPoint2)
            .then(response => response.json())
            .then(jsonData => {
                const gifSet = []
                for (let i = 0; i < 3; i++) {
                    gifSet.push(jsonData.data[i].images.original.url)
                }

                this.setState({
                    gifs: gifSet
                })
            });
      }

    render(){
        return(
        <div>
            <div><GifList gifList={this.state.gifs} /></div>
            <div><GifSearch  submitHandler={this.submitHandler}/></div>
        </div>
    )}
}