import React, { Component } from 'react';

class GifList extends Component {

   renderGifs = () => {
      return this.props.data.map(gif => {
         return <li key={gif.id.toString()}>
                  <img src={gif.images.original.url} />
               </li>
      })
   }

   render() {
      return (
         <div>
            <ul className='gifs-list'>
               {this.renderGifs()}
            </ul>
         </div>
      )
   }
}

export default GifList