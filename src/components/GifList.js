import React from 'react'

export default class GifList extends React.Component {

    render() {
        return (
            <div>
                {this.props.images.map((url, index) => <img key={index} src={url} alt='gif'/>)}
            </div>
        )
    }
}