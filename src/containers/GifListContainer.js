// key=cDPdz9FpnGmxZpPTLq8ZApNiklCq12fT
//url=https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=cDPdz9FpnGmxZpPTLq8ZApNiklCq12fT&rating=g
import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
import '../App.css'

class GifListContainer extends Component {

    state = {
        gifs: [],
        query: ''
      }
    
    componentDidUpdate(){
        let url = "https://api.giphy.com/v1/gifs/search?q=" +this.state.query+"&api_key=cDPdz9FpnGmxZpPTLq8ZApNiklCq12fT&rating=g"
        console.log(url)
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                gifs: json.data.slice(0,3).map(obj => obj.images.original.url)
            });   
        });
    }

    handleQuery = (query) => {
        this.setState({
            query: query
        })
    }


    render(){
        return(
            <div>
                <div><GifSearch handleQuery={this.handleQuery}/></div>
                <div><GifList gifs = {this.state.gifs}/></div>                
            </div>
        )
    }
}

export default GifListContainer