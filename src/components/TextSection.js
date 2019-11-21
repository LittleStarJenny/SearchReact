import React, { Component } from 'react';


 class TextSection extends Component {
    constructor(props) {
        super(props);
    // this.state = { paragraphs: []
    //      };
    }

    render() {
        // const { paragraphs } = this.state
        return (
            
              
                    <div className="wiki">
                     
                     {this.props.response.map((paragraph) =>
                            <p key={paragraph[0]}>{paragraph[0]} </p>
                        )}
                    </div>
                
        )
    }
}
    export default TextSection;