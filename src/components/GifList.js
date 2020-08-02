import React, { Component } from 'react';

// Note: React is a PAIN IN THE REAR when it comes to loading local images!!!
// Here's how to fix it: https://stackoverflow.com/questions/34582405/react-wont-load-local-images

class GifList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.gifData.map(gifObj => 
            <li key={gifObj.id}>
              <a href={gifObj.url}>
                <img src={require("../images/Poweredby-100px-White-VertLogo.png")} alt="Powered by Giphy" />
              </a>
              <br />
              <img src={gifObj.images.original.url} alt={gifObj.title} />
              <br /><br />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default GifList;