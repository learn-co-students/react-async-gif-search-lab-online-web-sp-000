// key=cDPdz9FpnGmxZpPTLq8ZApNiklCq12fT
//url=https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=cDPdz9FpnGmxZpPTLq8ZApNiklCq12fT&rating=g
import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
      }
    
    componentDidMount(){
        let url = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=cDPdz9FpnGmxZpPTLq8ZApNiklCq12fT&rating=g"
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                gifs: json.data.slice(0,3).map(obj => obj.images.original.url)
            }); 
            console.log(this.state.gifs)   
        });
    }
    


    render(){
        return(
            <div>
                <div><GifSearch /></div>
                <div><GifList gifs = {this.state.gifs}/></div>                
            </div>
        )
    }
}

export default GifListContainer