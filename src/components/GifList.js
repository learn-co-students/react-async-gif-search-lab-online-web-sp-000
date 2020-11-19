import React, { PureComponent } from "react";

class GifList extends PureComponent {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ul >
        
        {this.props.searchData.map(element =>  (
          <li><img src={element.images.original.url}></img></li>
        ))}
        </ul>
      </div>
    );
  }
}

export default GifList;

// console.log(element.url)
//             <li>Test</li>
