import React from 'react'


export default class GifList extends React.Component {
    // constructor(props) {
    //     super(props)
    // } //THOUGHT I NEEDED THIS TO GET PROPS, but seems unnecessary? "useless constructor"
    
    render() {
        return (
            <div>
                {this.props.data.map(gif=> <img key={gif.url} src={gif.url}/>)
                }
            </div>
        )
    }

}