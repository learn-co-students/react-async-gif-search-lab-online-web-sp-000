import React, { Component } from 'react'

// `<GifList />` is a _presentational_ component. It receives data from its props
// and renders html given the input data. It can render a top level `<ul>` with
// each gif as an `<li>`.

export default class GifList extends Component {

    render () {
        return (
            <ul>
                {this.props.gifs.map(gif => {
                    return <li><img key={gif.id} src={gif.images.original.url} alt="gif" /></li>

                })}
            </ul>
        )
    }
}