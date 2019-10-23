import React from "react";

class GifSearch extends React.Component {

    state = {
        query: ""
      };


      handleSubmit = event => {
        event.preventDefault()

        this.props.fetchGIFs(this.state.query) // calls parent method with NEW SET value arg
     //   debugger
    }

        render() {
            return (
              <div>
                <form onSubmit={this.handleSubmit}>
                  <input
                  type="text"
                  value={this.state.query}
                  onChange={event => this.setState({query: event.target.value})} />
                </form>
              </div>
            )
          }
        // onChange sets new state on event value input
        }
 export default GifSearch
