import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
    
    
    state = {
        titles: []
    }
    
    
    fetchAPI = (query = 'puppies') => {
        return(
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`).then(res => res.json())
        // .then(({data}) => console.log(data))
        .then(({data}) => this.setState({titles: data.slice(0,3)}))
        )}


    


    render() {
        return (
            <div>  
                <GifSearch fetchAPI={this.fetchAPI} />
                
                <GifList gifs={this.state.titles}/> 
            </div>
        )
    }

    componentDidMount() {
        this.fetchAPI();
    }
}

export default GifListContainer;