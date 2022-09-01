import React from 'react';

const Button = (props) => {

    return (
        <button className='ui inverted green button'>
            {props.children}
        </button>
    )

};

export default Button