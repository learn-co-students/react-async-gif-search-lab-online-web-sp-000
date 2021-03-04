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
        event.preventDefault()
        console.log(this.state.value)
        this.props.handleFetch(this.state.value)
    }

    render(){
        return(
            <div>
                <form onSubmit={event => this.props.handleSubmit(event)}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </form>
                
            </div>
            
        )
    }

}

export default GifSearch