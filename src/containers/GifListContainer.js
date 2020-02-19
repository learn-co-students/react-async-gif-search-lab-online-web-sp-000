import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{

    state = {
        gifs: []
    }
    componentDidMount(){
        this.handleGifs()
    }

    handleGifs = (q="dolphin") => {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${q}&api_key=N0NIbAFchRRqIKblGRjC36OZ6sdMEe7s&rating=g&limit=3`)
        .then(resp=>resp.json())
        .then(json=>{
            let imagesUrls = json.data.map(gif=>gif.images.original.url)
            this.setState({gifs: imagesUrls})
        })
    
    }

    handleSubmit = (term) =>{
       this.handleGifs(term) 
    }

    render(){
        return(
          <div>
              <GifSearch handleSubmit = {this.handleSubmit}/>
              <GifList gifs={this.state.gifs} />
          </div>
        )
    }
}