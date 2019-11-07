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
        this.handleData()
    }

    handleData = ()=>{
        console.log("in handle data")
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