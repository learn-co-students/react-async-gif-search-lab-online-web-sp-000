import React from 'react'

class GifList extends React.Component {
    render () {

        const gifCards = this.props.gifs.map(gif => (
            <li>
            <img src={gif} key={gif.url} alt="gif" height="150" width="150"/>
            </li>
        ))
        return (
            <div>
                <ul>
                    {gifCards}
                </ul>
            </div>
        )
    }
}

export default GifList