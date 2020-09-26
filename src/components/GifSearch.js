import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    changeHandler = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchTerm)
        this.setState({ searchTerm: "" })
    }
    render() {
        return (

            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="search" value={this.state.searchTerm} onChange={this.changeHandler} />
                <input type="submit" value="search" />
            </form>
        )
    }
}


export default GifSearch

//render form that receives user input for the giphy search 
//text input should be a controlled component 
//receive callback prop from its parent on a submit event should invoke callback prop with the value of the text input 