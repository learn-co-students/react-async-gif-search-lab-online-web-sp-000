import React from 'react'

export default class GifList extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
            gifs: []
        }
    }

    makeList = () => {
      console.log(this.props.gifs)
     return   this.props.gifs.map(gif => <img key={gif.id} alt={gif.title} src={gif.images.original.url} />)
    }



   componentDidMount(){
       console.log(this.props.gifs)
        this.setState({
            gifs: this.props.gifs, 
        })
       
    }

    render(){
   
        return(
            <div>{this.makeList()}</div>
        )
    }

 



}