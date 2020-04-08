import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    fetchData = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=dophin&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(({objData}) => {
            this.setState({
                gifs: objData.map( gif => ({
                    url: gif.images.original.url
                }))
            })
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
        return(
           <div>
               <GifList gifs={this.state.gifs} />
               <GifSearch fetchData={this.fetchData} />
           </div>
        )
    }
}



