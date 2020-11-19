import React, { PureComponent } from "react";

class GifSearch extends PureComponent {
  constructor() {
    super();
    this.state = {
    };
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSearch(this.state.search)
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Enter a Search Term
            <input onChange={this.updateSearch} type="text" name="search_term"/>
            <input onClick={this.onSubmit} type="submit" value="Find Gifs" />
          </label>
          
        </form>
      </div>
    );
  }
}

export default GifSearch;
