import React from 'react'
class GifList extends React.Component {
  render () {
    const gifs = this.props.gifs.map(g => {
      return <li><img src={g.images.original.url} alt={g.title} /></li>
    })

    return <ul>{gifs}</ul>
  }
}

export default GifList
