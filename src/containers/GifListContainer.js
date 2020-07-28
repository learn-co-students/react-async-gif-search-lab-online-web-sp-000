import React, {Component} from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            form: {
                entry: ""
            },
            gifs: []
        }
    }

    handleChange = (event) => {
        this.setState({
            form: {
            [event.target.name] : event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.handleSearch()
    }

    handleSearch() {
        let search = this.state.form.entry
        console.log(search)
        fetch('https://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + process.env.REACT_APP_GIPHY + '&rating=g')
        .then(resp => resp.json())
        .then( (json) => {this.setState({
            gifs: [json.data[0].images.original.url, json.data[1].images.original.url, json.data[2].images.original.url]
        })
        })
    }


    render() {
        return (<div>
            <GifList gifs={this.state.gifs}/>
            <GifSearch form={this.state.form} handleChange={this.handleChange} onSubmit={this.handleSubmit}/>
        </div>)
    }
}