import React from 'react'

export default class GifList extends React.Component {

  render() {
    return(
      <ul>
        <img src={this.props.gifItem.images.original.url} />
        {/*<li>{this.props.gifItem.slug}</li>
        <li>{this.props.gifItem.images.original.url}</li>
        <li>{this.props.gifItem.images.fixed_height_still.url}</li> */}

      </ul>
    )
  }

}
