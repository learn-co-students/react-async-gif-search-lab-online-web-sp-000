import React, { Component } from 'react';

export default class GifList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.gifListItems) {
      return(
        <ul>
          {this.props.gifListItems.map((imgLink, i) => {
            return(
              <li key={i}>
                <img src={imgLink} />
              </li>
            )
          })}
        </ul>
      )
    }
  }
}
