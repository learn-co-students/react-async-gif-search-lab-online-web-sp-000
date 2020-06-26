import React, {Component} from 'react';

export default class GifList extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.gifData.map(gif => (
                        <li key={gif.id}>
                          <img src={gif.url} alt={gif.title} />
                        </li>  
                    ))}
                </ul>
            </div>
        )
    }
}
