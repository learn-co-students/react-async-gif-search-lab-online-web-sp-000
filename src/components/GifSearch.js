import React, {Component} from 'react'


export default class GifSearch extends Component {


    render() {
        return (<form onSubmit={this.props.onSubmit}>
                    <input type="text" value={this.props.form.entry} onChange={this.props.handleChange} name="entry"></input> <br></br>
                    <input type="submit"></input>
                </form>)
    }
}