// the purpose is to give a rainbow colour to another component

import React from 'react'

// component goes in as the parameter, and is later returned as a super charged compontent
const Rainbow = (WrappedComponent) =>{
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 6)];
    const className = randomColour + '-text';

    return (props) =>{
        return (
            <div className={className}>
                {/*the spread operator is used to make sure the component has full access to all props*/}
                <WrappedComponent {...props} />
            </div>
        )
    }
    
}

export default Rainbow;