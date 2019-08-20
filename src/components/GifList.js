import React, { Component } from 'react';


export default class GifList extends Component {
    render(){
        return(
            <div>
                <ul>
                    
                    {this.props.gifList.map((gifURL) => {
                        return <li><img src={gifURL}></img></li>
                    })
                    }
                </ul>
            </div>
        )
    }
}