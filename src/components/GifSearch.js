import React from 'react';

class GifSearch extends React.Component {
    state = {
        query: ''
    };

    changeQuery = event => {
        this.setState({
            query: event.target.value
        })
    };

    render() {
        return(
            <form onSubmit={event => {
                event.preventDefault();
                this.props.search(this.state.query)
                }}>
                <input type='text' onChange={event => this.changeQuery(event)} value={this.state.query} /><br />
                <input type='submit' />
            </form>
        )
    }
};

export default GifSearch;