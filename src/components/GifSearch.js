import React from 'react'

export default class GifSearch extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={event => this.props.submitHandler(event)} >
                    <input type="text" onChange={this.props.updateSearchTerm} value={this.props.searchTerm} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}