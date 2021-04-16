import React from 'react'

class GifSearch extends React.Component {
    state = {
        gifSearch: ""
    }

    handleChange = (e) => {
        this.setState({
            gifSearch: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.gifSearch)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}>
                    </input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default GifSearch