import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{

    state = {
        gifs: []
    }
    componentDidMount(){
        this.handleFetch()
        console.log(this.state.gifs)
    }
    handleFetch = (val) =>{

        const searchURL = `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=dc6zaTOxFJmzC&rating=g`
        // console.log(searchURL)
        fetch(searchURL)
        .then(resp => resp.json())
        .then(data => {
            let dataSet = data.data
            console.log(data)
            console.log(dataSet)
            this.setState({
                gifs: [
                    dataSet[0],
                    dataSet[1],
                    dataSet[2]
                ] //collect and assign the first 3 gifs to gifs, replace with gifs: dataSet to capture all the gifs

            })
            console.log(this.state.gifs)
        })
    }

    render(){
        return (
            <div>
                <GifSearch handleFetch={this.handleFetch} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer