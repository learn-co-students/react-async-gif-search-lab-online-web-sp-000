import React from 'react';

export default class GifSearch extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.submitHandler}>
                <input onChange={this.props.changeHandler} value={this.props.searchValue}></input>
                <input type="submit"></input>
            </form>
        )
    }
}