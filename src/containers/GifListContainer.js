import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = { gifs: [] };

    handleSearch = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then((json) => {
            console.log(json.data)
            this.setState({
                gifs: json.data.slice(0, 3).map(gif => gif.images.original.url)//.slice(0,3).map(obj => obj.num)
            })
        } )
    }

    render() {
      return (
          <div>
                    <GifSearch handleSearch={this.handleSearch}/>
                      <GifList gifs={this.state.gifs} />;
          </div>

      )
    }
  }