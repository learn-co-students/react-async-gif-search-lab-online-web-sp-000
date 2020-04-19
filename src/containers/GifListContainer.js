import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends React.Component {
    state = {
      gifs : []
    }
  
    componentDidMount() {
     this.fetchData()
    }

    fetchData = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=I3tCKjeIdVn4eMPyHCf97bsAicM6Y5p5&rating=g&limit=3`) 
        .then(response => response.json())
        .then(({data}) => {
            this.setState({gifs: data.map(gif => ({url: gif.images.original.url})) //stores this data to state to pass down as prop to GifList
        })
        })
    }
  
    render() {
      return (
        <div>
           <GifSearch fetchData={this.fetchData}/>
           <GifList data={this.state.gifs}/>
        </div>
      )
    }
  
  }
  
  export default GifListContainer
