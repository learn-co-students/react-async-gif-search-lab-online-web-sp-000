import React, { Component } from 'react';

export default class GifSearch extends Component {

    render(){
        return(
            <form>
                <label >Enter a search term:</label>
                <input type="text" id="query"/>
                <input type="submit" value = "Search Gifs"/>
            </form>
        )
    }
}