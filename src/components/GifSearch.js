import React, { Component } from 'react';

export default class GifSearch extends Component {

    render(){
        return(
            <form>
                <input type="text" id="query"/>
                <input class = "btn btn-primary" type="submit" value = "Search Gifs"/>
            </form>
        )
    }
}