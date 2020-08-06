import React from 'react'

class GifList extends React.Component {
    render(){
        console.log(this.props.firstThree);
        return(
            <div>
                <ul>
                    <li><img src={this.props.firstThree[0]}></img></li>
                    <li><img src={this.props.firstThree[1]}></img></li>
                    <li><img src={this.props.firstThree[2]}></img></li>
                </ul>
            </div>
        )
    }
}


export default GifList