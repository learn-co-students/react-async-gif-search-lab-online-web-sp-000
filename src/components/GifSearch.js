import React from 'react';


class GifSearch extends React.Component{
constructor (props){
    super(props);
    this.state = {value: ' '};
}
 handleChange = (event) => {
 this.setState({value: event.target.value})


 }
  handleSubmit(event) {
      {this.state.value}
      event.preventDefault();
    }
          render() {
                  return(
                      <form onSubmit={this.handleSubmit}>
                      <input type="text" value={this.state.value} onChange={this.handleChange} />
                      <input type="submit" value="Submit" />
                   </form>
              
                  
                  )
         }
}
              
//onChange and event listener when you have something like input if we delete or type something something its 
//eveytime charecters remove or change thois.handleChange gonna be responsible and trigger for this event 



 



export default GifSearch;