import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component{
    state = {
        gifs: []
    }

    

    componentDidMount(){
        this.fetchGifs()
    }

    fetchGifs = (aug) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${aug}&api_key=nX33A6H1zEyNVefZEolgX6d9f38s3zEL&rating=g`)
            .then(res => res.json())
            .then(json => this.getImages(json))
    }

    render(){
        return(
            <div>
                <GifList imgs={this.state.gifs}/> 
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

    getImages = (arr) => {
    
        let gifArray = arr.data
        
        this.setState({
            gifs: gifArray.slice(0,3)
        })
           
    
        }
        

    handleSubmit = search => {
        this.fetchGifs(`${search}`)
    }
}
   

