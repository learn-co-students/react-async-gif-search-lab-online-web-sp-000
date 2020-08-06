import React from 'react'

class GifSearch extends React.Component {

    constructor(){
        super()
        this.state = {
            search: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({ search: event.target.value })
        console.log(this.state);
    }

    handleSubmit = event => {
        console.log(this.state.search);
        event.preventDefault()
        this.props.fetchGifs(this.state.search)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Search for an animal</h3>
                    <input type="text" value={this.state.search} onChange={this.handleOnChange}/>
                </form>
            </div>
        )
    }
}

export default GifSearch