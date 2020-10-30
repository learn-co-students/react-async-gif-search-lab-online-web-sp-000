import React, { Component } from 'react'

class GifSearch extends Component {

    render() {    
        return (
            <div className="ui form">
            <h3>Enter a Search Term:</h3>
            <div className="field">
              <input onChange={event => this.props.onChangeTerm(event)} />
            </div>
    
            <div className="field">
              <button onClick={event => this.props.onFindGIFsClick()} >Find Gifs</button>
            </div>
          </div>
        );
    }

}

export default GifSearch; 