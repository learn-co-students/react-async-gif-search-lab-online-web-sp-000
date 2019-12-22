import React from 'react';

export default class GifList extends React.Component {
    renderImages = () => (
        this.props.firstThreeGifs.map(gif => (<li><img alt="gif" src={gif}/></li>))
    )

    render(){
        return(
            <ul>
                {this.renderImages()}
            </ul>
        )
    }
}