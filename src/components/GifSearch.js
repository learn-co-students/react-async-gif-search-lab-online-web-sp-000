import React, {Component} from 'react';

export default class GifSearch extends Component{
    
    state = {
        term: ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () =>{
        this.props.handleSearch(this.state.term)
    }

    render(){
        return(
            <div>
                <h1>😇enter search term below💯</h1>
            <input onChange={this.handleChange}
            type="text" name="term" value={this.state.term}/>
            <button onClick={this.handleClick}
            >show me the GIFS!</button>
            </div>
        )
    }
}