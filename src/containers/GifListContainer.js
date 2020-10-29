import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
//<GifListContainer /> should be a container that does data fetching and then renders its corresponding sub-component. That’s it.

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: ''
    }
  }

   fetchGIFs = (query = "squirell") => {
  fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=DEvt17BerwqE1YuHcxBOt4EWH1cutiP4&rating=g`)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({ gifs: [data[0].images.original.url, data[1].images.original.url, data[2].images.original.url] })  //setting the state as an array made up of parts of the data object.

    })
}

componentDidMount(){
  this.fetchGIFs()
}


//it is this next callback function that should actually query the API with the text the user entered.
// handleSubmit = (event) => {
//   event.preventDefault()
//   this.fetchGIFs(this.state.gifs)
// }

  render() {
    return (
        <div>
         < GifSearch handleSubmit = {this.handleSubmit} fetchGIFs = {this.fetchGIFs}/>
         <GifList gifs={this.state.gifs}/>
          </div>
    );
  }
}

export default GifListContainer;
