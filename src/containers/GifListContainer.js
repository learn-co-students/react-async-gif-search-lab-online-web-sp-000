import React from 'react'
import GifList from '../GifList'


export default class GifListContainer extends React.Component{
    state = {
        gifs: []
    }

    

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=nX33A6H1zEyNVefZEolgX6d9f38s3zEL&rating=g')
          .then(res => res.json())
          .then(json => this.randomFunc(json))
      }

    render(){
        return(
            <div></div>
        )
    }

    randomFunc = (arr) => {
        arr.data.map(function(i){
            <GifList key= {i} />
            console.log(i)
        })
        
    }
    

}