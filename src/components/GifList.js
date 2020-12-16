import React from 'react'

class GifList extends React.Component {


  render() {
    return (
      <ul>
        {this.props.data.map((u)=> (<li><img src={u.url}/></li>))}
      </ul>
    )
  }

}

export default GifList;
