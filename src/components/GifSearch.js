import React from 'react';

export default class GifSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    handleGifSearch = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSearch(this.state.text)
    }

    render() {
        return(
            <div>
                <p>Enter search term:</p>
                <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='text'
                    value={this.state.text}
                    onChange={this.handleGifSearch}
                />
                <input type='submit' value='Gimme the gifs!'></input>
                </form>
            </div>
        )
    }
}