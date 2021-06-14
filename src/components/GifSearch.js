import React, { Component } from 'react';


//no need to modify anything in this component
class GifSearch extends Component {
    constructor(){
        super()
        this.state = {
            gifName: ''
        }
    }

  


    render() {
        return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" name="gifName" onChange={this.inputHandle} value={this.state.gifName}/>
                  <button>Find Gif</button>        
              </form>
          </div>
        );
      }

    inputHandle = (e)=>{
       this.setState({
         gifName: e.target.value
       })
  
    } 

    handleSubmit = (e)=>{
        e.preventDefault()

        let gifName = this.state.gifName  
        this.props.onSearch(gifName)
    }


}



export default GifSearch;
