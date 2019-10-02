import React from "react";
import './View.css';
import ImageCard from './ImageCard';


const View = (props) => {
    const imgs = props.imagesArrayfromAsync.map(img => {
        return <ImageCard key={img.id} image={img} />    });

    return (
        <div className="image__list">{imgs}</div>
    )
}

export default View;