import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
    return (
        <div className='type'>
            <Typewriter
             onInit={(typewriter)=> {
             typewriter
             .typeString('Junior Web Developer')
             .start();
             }}
             />
        </div>
    );
}

export default Type;