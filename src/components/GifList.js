import React from 'react';

export default class GifList extends React.Component {

    render() {
        return (
            <React.Fragment>
                <ul>
                    <li><img src={this.props.images[0]}></img></li>
                    <li><img src={this.props.images[1]}></img></li>
                    <li><img src={this.props.images[2]}></img></li>
                </ul>
            </React.Fragment>
        )
    }
}

