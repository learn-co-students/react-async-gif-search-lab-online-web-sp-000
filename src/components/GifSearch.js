import React from 'react'

class GifSearch extends React.Component{

    constructor(props){
        super(props)
        this.state={
           userInput:'' 
        }
    }

    handleChange = (e) =>{
        this.setState({
            userInput: e.target.value
        })
    }

    handleSubmit =(e) =>{
        e.preventDefault()
        e.persist()
        this.props.handleUserInput(this.state.userInput)
        
    }

    render(){
        console.log(this.props)
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search:</label>
                    <input type="text" value={this.state.userInput} onChange={this.handleChange}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default GifSearch;