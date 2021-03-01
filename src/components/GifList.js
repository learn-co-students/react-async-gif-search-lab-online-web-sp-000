import React, { Component } from 'react';

class GifList extends Component {
   render() {
      return (
         <div>
            {console.log(this.props.data)}
         </div>
      )
   }
}

export default GifList