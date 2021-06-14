import React, { Component } from 'react';


class GifList extends Component {
    constructor(){
        super()
        this.state = {
            gifList: []
        }
    }



    render() {
        return (
          <div>
              {this.findGifByName()}
          </div>
        );
      }

    findGifByName = () => {
        return this.state.gifList.map((gif)=>{
            console.log(gif.title)
            if (gif.title === this.props.searchTerm){
               return <img key={gif.id} src={gif.images['480w_still'].url}/>
            }
      
        })
    }
    

    componentDidMount() {
      fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
      .then(response => response.json())
      .then(data => {
        this.setState({
            gifList: data.data
        })

      })

    }

}



export default GifList;
