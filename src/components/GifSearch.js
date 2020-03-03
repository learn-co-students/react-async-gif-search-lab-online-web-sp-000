import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        query: ""
    }

    submitHandler = event => {
       event.preventDefault()
       this.props.fetchGifs(this.state.query)
    }

 render() {
     return(
         <div>
           <form onSubmit={this.submitHandler}>
              <input type="text" onChange={event => this.setState({query: event.target.value})} value={this.state.query} />
            </form>
         </div>
     )
 }

}

export default GifSearch