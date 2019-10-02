import {BrowserRouter, Switch,  Route} from 'react-router-dom';
import React from 'react';
import Header from "./Header";
import SearchBar from "./SearchBar";
import View from './View';
const detailView = React.lazy(() => import(/* webpackChunkName: "detailView" */ './detailView'));


const Router= () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/SearchBar" component={SearchBar}/>
            <Route path="/images" render={(imagesArrayfromAsync) => <View {...imagesArrayfromAsync} component={detailView}/>} />
            </Switch>    
            </BrowserRouter>
        </div>
    )
}

export default Router