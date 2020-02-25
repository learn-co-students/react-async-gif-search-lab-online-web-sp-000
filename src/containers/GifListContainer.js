import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

    constructor(props){
        super(props)
        this.state ={
         gifs: []
        }
    }

    handleUserInput = (userInput) => {
       fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=HSYGBPZPIDP6nJpCxKnnTbOEIA4TYXqy&rating=g&limit=3`)
       .then(resp => resp.json())
       .then(gifResponse => {
           const urls = gifResponse.data.map((gif) => {
             return gif.images.original.url
           })
          this.setState({
              gifs: urls
          })
           
       })
          
    }

    render(){

      console.log(this.state.gifs);
      
        
        return(
            <div>
                
               <GifSearch handleUserInput={this.handleUserInput}/>
               <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;