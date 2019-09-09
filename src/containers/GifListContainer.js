import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {gifs: []};
    this.getGifs = this.getGifs.bind(this);
  }

  componentDidMount(){
    this.getGifs()
  }

  getGifs(query="cats"){
    this.setState({gifs: []});
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(response => response.json())
    .then(response => {
      for(let i = 0; i < 3; i++){
        this.setState({
          gifs: [...this.state.gifs, response.data[i].images.original.url]
        })
      }
    })
  }

  render(){
    return(
      <div>
        < GifSearch getGifs={this.getGifs} />
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }
}