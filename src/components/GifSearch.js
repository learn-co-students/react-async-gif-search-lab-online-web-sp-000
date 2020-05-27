import React from 'react';

export default class GifSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    handleGifSearch = event => {
        event.preventDefault()
        this.setState({
            text: event.target.value
        })
        this.props.handleSubmit(event)
    }

    render() {
        return(
            <div>
                <p>Enter search term:</p>
                <form onSubmit={event => this.handleGifSearch(event)}>
                <input
                    type='text'
                    name='text'
                    value={this.state.text}
                />
                <input type='submit' value='Gimme the gifs!'></input>
                </form>
            </div>
        )
    }
}