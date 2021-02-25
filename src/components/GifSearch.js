import React, {Component} from 'react'
// import GifListContainer from '../containers/GifListContainer'


export default class GifSearch extends Component {

    state = {
        searchTerm: ""
    }

handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.searchTerm)
}


handleChange = (event) =>  {
this.setState({
    searchTerm: event.target.value
})
}

render() {
    return (
        <div>
            <form onSubmit={event => this.handleSubmit(event)}>
                <input
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.searchTerm}
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

}