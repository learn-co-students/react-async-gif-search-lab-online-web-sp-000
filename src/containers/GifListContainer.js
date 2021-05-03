import React from 'react' 
import GifSearch from '/home/austin/lessons/react-async-gif-search-lab-online-web-sp-000/src/components/GifSearch.js'
import GifList from '/home/austin/lessons/react-async-gif-search-lab-online-web-sp-000/src/components/GifList.js'

export default class GIFListContainer extends React.PureComponent {

    constructor(){
        super()
        this.state = {
            gifs: [],
            keyword: "dolphin",
        }
    }


    setKeyword = (e) => {

        e.preventDefault();
        let newWord = e.target.querySelector('input').value;

        this.setState({
            keyword: newWord,
        })
        
    }

    setGifs = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=' + this.state.keyword + '&api_key=LrSloPoTGlkn0h9K0sDhdtQNMijaYc7p&limit=3&rating=')
        .then(resp => resp.json())
        .then(obj =>
            {
                this.setState({
                    gifs: obj.data ,
                })  
            })
    }

componentDidUpdate(){
    this.setGifs();
}

render(){
    console.log(this.state.keyword)
    return(
        <div>
            <GifSearch setKeyword={this.setKeyword} />
            <GifList gifs={this.state.gifs}/>
        </div>
    )
}




}