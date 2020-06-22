import React, { Component } from 'react';

export default class GifList extends React.Component {
    renderGifs = () => (
        this.props.gifUrls.map((gifUrl, idx) => <li key={idx}><img src={gifUrl} alt=""/></li>)
    )

    render() {
        console.log(this.props.gifUrls);
        return (
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}