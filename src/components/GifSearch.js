import React, {Component} from 'react'

class GifSearch extends Component {
    state = {
        value: ""
    }

    handleSearchChange(event) {
        this.setState({
           value: event.target.value
        })
    }

    submitInput = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.value)
    }

    render(){
        return(
            <form onSubmit={this.submitInput}>
                <input type="text" name="search" onChange={event => this.handleSearchChange(event)} value={this.state.value}/>
                <button>Submit</button>
            </form>
        )
    }
    
}

export default GifSearch