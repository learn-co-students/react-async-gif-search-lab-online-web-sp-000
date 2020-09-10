import React, {Component} from 'react'

export default class GifSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
        searchTerm: ""
    }
    
    this.changeHandler = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    this.submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchTerm)
        this.setState({ searchTerm: "" })
    }

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


