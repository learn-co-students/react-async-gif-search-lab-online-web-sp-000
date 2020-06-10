import React, { Component } from "react";

export default class GifSearch extends Component {
    
    state = {
        query: ""
    }

    handleSubmit= event => { 
        event.preventDefault()
        console.log(this.state.query) 
        return this.props.fetchImages(this.state.query)  
        
    }

    queryChange= event => {
        this.setState({
            query: event.target.value
        })
    }
    
    render(){
        return(
        <div>
          <form onSubmit= {this.handleSubmit}>

          <input
            type="text"
            name="query"
            onChange={this.queryChange}
            value={this.state.query}
          />
          <input type = "submit"/>
        </form>
        </div>
        )} 


}
