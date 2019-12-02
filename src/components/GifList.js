import React from 'react'
export default class GifList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.urls.map(url => <li><img src={url} alt="gyphy"></img></li>)}
            </ul>
        )
    }
}