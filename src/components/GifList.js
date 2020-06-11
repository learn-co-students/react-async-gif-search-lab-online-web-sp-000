import React, { Component } from 'react';

class GifList extends Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }
   render() { 
      return ( 
         <div>
            {this.props.gifs.map((gif, i) => {
               return (
                  <li><img src={gif.images.original.url} alt="gif" key={i} /></li>
               )
            })}
         </div>
      );
   }
}
 
export default GifList;