import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchEntry: ''
    }

    handleChange = (event) => {
        this.setState({
            searchEntry: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getGifs(this.state.searchEntry)
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>Enter a Search Term:
                        <input type="text" name="search" onChange={event => this.handleChange(event)}/> </label>
                        <br></br>
                    <button type="submit">Find Gifs</button>
                </form>
            </div>
        )
    }


}

export default GifSearch