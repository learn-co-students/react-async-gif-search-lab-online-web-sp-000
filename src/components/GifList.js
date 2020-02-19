import React from 'react';


class GifList extends React.Component {
    state = {
        phrase: ""
    }

    render() {
       return( 
           this.props.gifs.map(gif => {        
                 return  <img src={gif.images.original.url} alt="some pic"/>

           })
       
        )
    }
    

    
}

export default GifList;