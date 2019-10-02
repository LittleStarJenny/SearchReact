import React , {Component} from "react";
import { navigate } from "@reach/router";
import { Redirect } from 'react-router-dom';


class SearchBar extends Component {

    constructor(props) {
        super(props);
       this.state={
           val: ""
       };
    }

    handleChange = (e)=> {
    this.setState({
    val: e.target.value
})
    }

handleSubmit = (e)=> {
e.preventDefault();
this.props.userSubmit(this.state.val)
navigate(`/${this.state.val}` , {replace:false});
}




    render() {
        return (
            <div>           
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.val} 
                placeholder="Hej"
                onChange={this.handleChange}/>
            </form>
            {this.props.imagesArrayfromAsync.length > 0 &&
            <Redirect to={{
                pathname: '/images',
                state: {images: this.props.imagesArrayfromAsync}
               
            }}/>
        }
        </div>
        );
    }
}

export default SearchBar;