import React, {Component} from 'react';

class GifSearch extends Component {
   state = {
      value: ''
   }

   handleChange = event => {
      this.setState({value: event.target.value})
   }

   render() {
      return (
         <div>
            <form onSubmit={event => this.props.handleOnSubmit(event, this.state.value)}>
               <h3>Enter a Search Term:</h3>
               <input type="text" 
                      value={this.state.value} 
                      onChange={this.handleChange} />
               <input type="submit" value="Search Gifs" />
            </form>
         </div>
      )
   }
}

export default GifSearch