import React, {Component} from 'react';

class GifList extends Component {
    render(){
        return(
            <ul>
                {/* {this.props.gifUrlList.reduce((currentValue, gifUrl) => {return (currentValue + `<li><img src=${gifUrl}></li>`)})} */}
                <li><img src={this.props.gifUrlList[0]} alt="gif0"></img></li>
                <li><img src={this.props.gifUrlList[1]} alt="gif1"></img></li>
                <li><img src={this.props.gifUrlList[2]} alt="gif2"></img></li>
            </ul>
        )
    }
}

export default GifList