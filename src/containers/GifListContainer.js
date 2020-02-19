import React from 'react'

export default class GiftListContainer{

    state = {
        gifs: []
    }

    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=N0NIbAFchRRqIKblGRjC36OZ6sdMEe7s&rating=g&limit=3")
        .then(resp=>resp.json())
        .then(json=>console.log(json.data))
    }

    // handleGifs(json){
    //     let imagesUrls = json.data.map(gif=>gif.images.original.url)
    //     this.setState({gifts: imagesUrls})
    // }

    render(){
        return(
          <div>
              {/* <GifSearch />
              <GifList /> */}
              {this.state.gifs}
          </div>
        )
    }
}