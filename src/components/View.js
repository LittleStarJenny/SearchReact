import React, {Component} from "react";
import './View.css';
import ImageCard from './ImageCard';
import ImageLike from './ImageLike';

class View extends Component {
    constructor(props) {
        super(props);
    this.state = { imgs: true
         };
    }


render () {
    const imgs = this.props.imagesArrayfromAsync.map(img => {
        return (
        <div> <ImageCard key={img.id} image={img} />  
        <ImageLike url={img.urls.raw}/>
        </div>
        )
    });
    
    return (
        <div className="image__list">{imgs}</div>
        )
    }
}

export default View;