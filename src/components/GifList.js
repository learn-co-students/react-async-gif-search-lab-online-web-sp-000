import React from 'react'

class GifList extends React.Component {
  //  It receives data from its props and renders html given the input data. 
  // It can render a top level <ul> with each gif as an <li>

  // {this.props.pets.map(singlePet => (
  //   <div key={singlePet.id} className="ui cards"><Pet pet={singlePet} onAdoptPet={this.props.onAdoptPet}/></div>
  // ))}


  render() {
    return (
    <ul>
      {this.props.gifs.map(singleGif => (
        <li >
          <img src={singleGif.images.original.url} key={singleGif.id} alt="gif"/>
        </li>
      ))}
    </ul>
    )
  }


}

export default GifList