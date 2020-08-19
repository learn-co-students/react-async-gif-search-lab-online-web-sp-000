import React, {Component} from 'react';

export default class GifSearch extends Component {


    render() {
        return (
            <div>
                <form onSubmit={e => this.props.onSearchSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="queryString">Enter a search term:</label>
                        <input type="text" name="queryString" onChange={(e) => this.props.handleChange(e)} value={this.props.queryData} className="form-control" /> 
                        <button type="submit" className="btn btn-success">Find Gifs</button>
                    </div>
                </form>
                
            </div>
        )
    }


}