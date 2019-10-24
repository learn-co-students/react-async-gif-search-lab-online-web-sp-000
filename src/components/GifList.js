import React from 'react'

export default class GifList extends React.PureComponent {

  render() {
    return (
        <ul>
        {this.props.gifs.map((img, idx) => (
          <li key={idx}><img key={idx} alt="" src={img} /></li>
        ))
        }
        </ul>
    )
  }
}
