import React, {Component} from 'react';


export default class GifList extends Component {

  createCard = (item)=> {
    console.log(item)
    return (<div>
      <img src={item.images.original.url} alt="doggy"/>
      <p>{item.title}</p>
      </div>
    )

  }
  render(){
    return (<div className="gifSearch">
      {this.props.search === '' ? <h1>Search for Gifs</h1>:<h1>Results for {this.props.search}</h1>}
      {this.props.list.map(item => this.createCard(item))}
    </div>)
  }
}
