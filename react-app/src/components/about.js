import React from 'react';
import Rainbow from '../higherOrderComponent/rainbow'


const About = () =>{
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p className="">Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Dignissimos enim neque amet iusto. 
            Necessitatibus praesentium inventore rerum quos repudiandae corrupti 
            tempora laboriosam sint beatae fugit architecto, cum optio saepe totam?</p>
        </div>
    )
}

// now you can see that the component is wrapped from the higher order component, and therefore gets its special characteristics
export default Rainbow(About);