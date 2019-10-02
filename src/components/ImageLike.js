import React from 'react';

class ImageLike extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        isLiked: false,
        forLocalstorage: "",
        likedArr: []
    }
}

handleClick = () => {
    this.setState({isLiked: !this.state.isLiked})
    localStorage.setItem('item', this.state.forLocalstorage)

    const item = localStorage.getItem('item')
    console.log(item)
    this.setState({forLocalstorage: item})
    this.setState(prevState => ({
        likedArr: [...prevState.likedArr, "Stan"]
    }))
 console.log(this.state.likedArr)

}

componentDidMount() {
    console.log(this.state.forLocalstorage)
}
// componentWillUpdate () {
//     console.log("from update" + this.state.forLocalstorage)
// }

render() {
    const like = this.state.isLiked? <span role="img">❤️</span>: <span role="img">🤍</span>
        return <button className="likeheart" onClick={this.handleClick}> {like}</button>
    }
}

export default ImageLike;