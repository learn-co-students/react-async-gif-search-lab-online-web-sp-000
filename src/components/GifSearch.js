import React from 'react'

export default class GifSearch extends React.Component{

    state = {
        term: ""
    }

    handleInputChange = (e) =>{
        this.setState({term: e.target.value})
    }

    // handleSubmit = e =>{
    //     e.preventDefault;
    //     debugger
    //     this.props.handleSubmit(this.state.term)
    // }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state.term)
      }

    
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Enter a search term
                <input type="text" onChange = {this.handleInputChange}></input>
                <input type="submit"></input>
                </label>
            </form>
            </div>
        )
    }

}