import React, {Component} from "react"
import GifList from "../components/GifList.js"

export default  class GifListContainer extends React.Component{


state = {
  gifs: [
      {
    type:" ",
    id:" ",
    url:""
   
      
  }
  ]

}


render () {
return (
<div>
<GifList gifs={this.state.gifs}/>


 </div>
)

}
 componentDidMount() {
 fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3')
 .then(response => response.json())
 .then(({data}) => {
     this.setState({
         gifs:data.map(data => ({
         url: data.images.original.url
         // key names refrences to our state here 
         })
         ) 
     })
 })
 }




}