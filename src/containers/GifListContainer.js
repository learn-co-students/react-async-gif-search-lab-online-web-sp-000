import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
// URL for API: https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=bM8TXIFy9aNRfwBG0HRe3XP12sDeoUyC&rating=g

class GifListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: [] // after fetch is an array of objects
    }
  }
  

  // fetch data from giphy API, store the first three gifs from the response in its state
  // pass that state data down to child, the <GifList> component, as a prop.

  // render a <GifSearch /> component that renders the form.
  // should pass down a submit handler function to <GifSearch /> as a prop.

  handleSearchSubmit = (searchTerm) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=bM8TXIFy9aNRfwBG0HRe3XP12sDeoUyC&rating=g`)
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        gifs: resp.data.slice(0,3)
      })
      console.log(this.state.gifs)
    })
  }

  render() {
    return (
    <div>
      <GifList gifs={this.state.gifs}/>
      <GifSearch submitHandler={this.handleSearchSubmit} />
    </div>
    )
  }

}

export default GifListContainer