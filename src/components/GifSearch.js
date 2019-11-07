import React, { Component } from 'react';

export default class GifSearch extends Component {

    constructor() {
        super();
    
        this.state = {
          query: ''
        };
      }

    handleChange = event => {
        this.setState({
          query: event.target.value
        })
      }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleQuery(this.state.query)
    }

    render(){
        return(
            
            <form onSubmit={this.handleSubmit}>
                <div className='form-group text-center'>
                    <label for ='query' >Enter a search term:</label>
                    <input className="form-control-sm" id="query" name="query" type="text" onChange={this.handleChange} value={this.state.query}/>                   
                    <button className='btn btn-primary' type="submit">Search Gifs</button>
                </div>
                
            </form>
        )
    }
}