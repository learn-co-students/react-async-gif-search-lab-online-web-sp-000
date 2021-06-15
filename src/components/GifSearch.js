import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
       this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitHandler(this.state.searchTerm)
    }
 

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type={'text'} onChange={this.handleChange}></input>
                <input type={'submit'} value={'Search GIFs'}/>
            </form>
        )
    }
}