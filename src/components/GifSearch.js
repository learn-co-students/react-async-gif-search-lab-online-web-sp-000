import React from 'react'

class GifSearch extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
        // console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.props.searchHandler(this.state.value)}>
                <lable>
                    <input type="text" name="Giphy Search" />
                </lable>
                <input type="submit" name="search submit" value={this.state.value} onChange={this.handleChange} />
            </form>
        )
    }
}

export default GifSearch