import React from 'react';
import View from './View';
import Text from './Text';

const detailView = () => {

    return (
        <div>
           
        <Text />
        <View imagesArrayfromAsync={this.props.history.state.images} />
        </div>
    )
}

export default detailView;