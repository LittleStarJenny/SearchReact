import React from 'react';

class ImageLike extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        isLiked: false,
    }
}

handleClick = () => {
    
    if(this.state.isLiked === false){
        window.localStorage.setItem(this.props.url.substring(28, 47), this.props.url);
    } else if(this.state.isLiked === true){
        window.localStorage.removeItem(this.props.url.substring(28, 47));
    }

    this.setState({isLiked: !this.state.isLiked});

    // localStorage.setItem("item", this.state.forLocalStorage)
    // //const item = localStorage.getItem(this.props.url)
    // this.setState({forLocalStorage: item})
    // this.setState(prevState => ({
    //     likedArr: [...prevState.likedArr, this.props.imgId]
    // })) 
   
}


 componentDidMount() {
    // console.log(" ");
    // console.log("From LINK");
    //  console.log(this.state.url);
    //  console.log(this.props.url);
    // this.setState({
    //     url: this.state.url
    // });
    
}

    render() {
        const value = window.localStorage.getItem(this.props.url.substring(28, 47));
        if( value === null && this.state.isLiked !== false ) {
            this.setState({
                isLiked: false,
            })
        }
        if (value !== null && this.state.isLiked === false) {
                this.setState({
                    isLiked: true,
                })
        }
    const like = this.state.isLiked? <span role="img">❤️</span>: <span role="img">🤍</span>
        return <button className="likeheart" onClick={this.handleClick}> {like}</button>
    }
}

export default ImageLike;