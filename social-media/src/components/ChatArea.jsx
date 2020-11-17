import React from 'react';


export default class ChatArea extends React.Component {
    render(){
        const text = `Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Ducimus earum eligendi rem quasi vero recusandae accusantium 
        vitae neque nam. Labore quo odio aspernatur beatae hic alias nemo minus 
        temporibus porro!`;
        return(
            <React.Fragment>
                <p>{text}</p>
            </React.Fragment>
        )
    }
}