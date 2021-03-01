import React, { Component } from 'react';

class GifList extends Component {
   render() {
      return (
         <div>
            <ul className='gifs-list'>
               {console.log(this.props.data)}
               {this.renderGifs()}
            </ul>
         </div>
      )
   }

   renderGifs = () => {
      return this.props.data.map(gif => {
         return <li><img src={gif.images.original.url} /></li>
      })
   }
}

export default GifList