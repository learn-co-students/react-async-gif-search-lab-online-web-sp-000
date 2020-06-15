import React, { Component } from 'react'

class Gif extends Component{

    render(){
        return(
            <li><img src={this.props.url}/></li>
        )
    }
}

export default Gif