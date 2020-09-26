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
            <form class='search' onSubmit={this.submitHandler}>
                <h5>Enter a Search Term: </h5>
                <input type="text" class="searchBox" placeholder="Search GIFs" value={this.state.searchTerm} onChange={this.changeHandler} />
                <br></br>
                <br></br>
                <button type="submit" class="submit" onclick={this.submitHandler}>Find GIFs</button>
            </form>
        )
    }
}


export default GifSearch