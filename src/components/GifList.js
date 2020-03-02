import React from 'react'

//import GifListContainer from '../containers/GifListContainer'

class GifList extends React.Component {
  
  render() {
    return (
      <ul>

        {
          this.props.gifs.map(element => {
            return (
              <li key={element.id}>
                <img src={element.images.original.url} alt="none" />
              </li>
            )
          })
        }



      </ul>

    )
  }
}

export default GifList
