import React from "react";

class GifSearch extends React.Component {

    state = {
       search: ""
    }

    handleIputChange = (event) => {
        this.setState({
            search: event.target.value 
        })
        console.log(this.state.search)
    }

    handleForm = (event) => {
        event.preventDefault()
        console.log("clicked")
        this.props.handleSubmit(this.state.search)
    }

    render() {
        return (
        <form onSubmit={this.handleForm}>
            <div>
                <label>
                    Search String
                    <input
                        id="searchString"
                        name="searchString"
                        type="text"
                        onChange={this.handleIputChange}
                    />
                </label>
            </div>
            <div>
                <button type="submit">Search</button>
            </div>
        </form>
           
        );
    }

}

export default GifSearch;