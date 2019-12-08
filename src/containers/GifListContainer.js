import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
    constructor() {
        super()
        this.state = {
            topThree: [],
            searchTerm: "cats"
        }
    }
   

    submitHandler = event => {
       
       event.preventDefault()
        this.setState({
            searchTerm: event.target.firstElementChild.value
        })

        this.getData()

    }

    getData = () =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=JgcSgPw1uTPJz5lz0sP9WBfYESpFphTq&rating=g`).then(resp => resp.json())
        .then(data => {

            let rxThree = []
            for(let i = 0; i < 3; i++){
                rxThree.push(data.data[i])
            }
            // console.log(rxThree)
            this.setState({
                topThree: rxThree
            })
            // console.log(this.state.topThree)
        })
    }

    updateSearchTerm = (event) =>{
        this.setState({
            searchTerm: event.target.value
        })
    }


    componentDidMount() {
        this.getData()
    }

    render() {
        
        return(
            <div>
                < GifSearch searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} submitHandler={this.submitHandler} />
                < GifList topThree={this.state.topThree} />
            </div>
        )
    }
}