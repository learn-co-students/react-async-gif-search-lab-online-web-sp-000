import React from 'react';

export default class GifList extends React.Component {

    render() {
        const createList = () => {
            return this.props.gifs.map(gif => (
                <li>
                    <img src={gif.url} alt='' />
                </li>
            ))
        }

        return(
            <div>
                <ul>
                    {createList()}
                </ul>
            </div>
        )
    }

}