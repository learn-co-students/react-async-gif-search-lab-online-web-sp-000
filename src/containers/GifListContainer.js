import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         }
    }

    componentDidMount(){
        fetch('http://api.giphy.com/v1/gifs/search?q=icecream&api_key=dc6zaTOxFJmzC&rating=g')
        .then(resp => resp.json())
        .then(gifs => this.setState({
            data: gifs.data.slice(0,3)
        }))
    }

    searchSubmit = (value) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(gifs => this.setState({
            data: gifs.data.slice(0,3)
        }))
    }


    render() { 
        return ( 
        <div>
            <GifSearch searchSubmit={(value)=>{this.searchSubmit(value)}}/>
            <GifList data={this.state.data}/>
        </div> );
    }
}
 
export default GifListContainer;