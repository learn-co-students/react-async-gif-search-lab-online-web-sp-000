import React, { Component } from "react";

class GifSearch extends Component {
    constructor(){
        super()
        this.state = {
            searchTerm: "Make a search"
        }
    }

    changeHandler = (e)=>{
        this.setState(
            {searchTerm: e.target.value}
        )
    }

    submitHandler = (e)=>{
       e.preventDefault()
       console.log(this.state.searchTerm)
       this.props.submitHandler(this.state.searchTerm)
    }


    render(){
        return(
           <form onSubmit = {this.submitHandler}>
             <p>Enter a search term:</p>
             <input type="text" name = "searchTerm" value = {this.state.searchTerm} onChange = {this.changeHandler} ></input>
             <button type="submit">Search</button>
           </form>
        )
    }

}

export default GifSearch