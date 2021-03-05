import React, {Component} from 'react'

class GifSearch extends Component{
    state = {
        value: ""
    }

    handleChange = event => {
        this.setState({ 
            value: event.target.value
        })
    }

    handleSubmit = event =>{
        console.log(this.state.value)
        event.preventDefault()
        this.props.handleFetch(this.state.value)
    }

    render(){
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </form>
            </div>
        )
    }

}

export default GifSearch