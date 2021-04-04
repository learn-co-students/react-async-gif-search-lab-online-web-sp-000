import React from 'react';

export default class GifList extends React.Component {
    render() {
        return (
          <div>
            <ul>
                {this.props.firstThreeGifs.map(gif => (
                    <li><img src={gif}  width="250" /></li>
                ))}
            </ul>
          </div>
        )
    }
}