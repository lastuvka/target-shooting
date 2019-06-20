import React from 'react';
import './Target.css';

function Target({radius = 0}) {

    return (
        <div className="Target" style={{width: radius*2, height: radius*2}} />
    );
}



export default Target;
