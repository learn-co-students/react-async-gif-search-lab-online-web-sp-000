import React from 'react'

import GifListContainer from '../containers/GifListContainer'

class GifList extends React.Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <ul>

        {this.props.gifs.map(element => {
          return (
            <li>
              <img src={element.images.original.url} />
            </li>
          )
        })
        }



      </ul>

    )
  }
}

export default GifList
