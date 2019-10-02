import React, {Component} from "react";
import ReactDOM from "react-dom";
import Axios from 'axios';
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

// import Router from './components/Router';

 



class App extends Component { 
    state = { images: [] };


handleSubmit = async (val) => {
    const response = await Axios.get('https://api.unsplash.com/search/photos', {
            params: { query: val,
                
                per_page: 24,},
            headers: {
                Authorization: 'Client-ID 089794ef538dc19fd8119c2752b38afbca127e9ae3198ef4f2d6ebe63a06c998'
            }
        })
        this.setState({ images: response.data.results })
    

}



    render() {
        return (
           
            <div>
                <Header/>
                <SearchBar userSubmit ={this.handleSubmit} imagesArrayfromAsync={this.state.images}/>

            </div>
           
        )

    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));