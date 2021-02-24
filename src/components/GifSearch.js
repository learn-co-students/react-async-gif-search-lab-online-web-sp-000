import React from 'react'

export default class GifSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            searchTerms: ''
        }
    }
    handleTextValue = (event) => {
        this.setState({
            searchTerms: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.gifListHandler(this.state.searchTerms)
        this.setState({
            searchTerms: ''
        })
    }

    render() {
        return <div style={{float: 'right', padding: '30px'}}>
                <h4>Enter a Search Term</h4>
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <input type='text' value={this.state.searchTerms} onChange={this.handleTextValue}/>
                    <br/>
                    <input type='submit' value='Find Gifs'></input>
                </form>
            </div> 
    }
}
