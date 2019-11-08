import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';


class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    fetchGIFs = (query) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
          .then(response => response.json())
          .then(data => {
              this.setState({
                  gifs: data.data
              })
          })
    }

    render () {
        return(
            <div>
                <GifList gifs={this.state.gifs} />
                //<GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop
                <GifSearch getGIFs={this.fetchGIFs} />
            </div>
        )
    }
}

export default GifListContainer
