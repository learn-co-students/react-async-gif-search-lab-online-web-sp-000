import React, { Component } from 'react';

class GifSearch extends Component {
   constructor(props) {
      super(props);
      this.state = {  
         value: this.props.searchTerm
      }
   }

   handleChange = event => {
      this.setState({ 
         value: event.target.value 
      });
   }

   handleSubmit = event => {
      event.preventDefault()
      this.props.executeSearch(this.state.value)
   }

   render() { 
      return ( 
         <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} name="searchTerm" id="searchTerm" value={this.state.value} />
            <input className="btn btn-success" type="submit" name="submit" id="submit" value="Find Gifs" />
         </form>
      );
   }
}
 
export default GifSearch;