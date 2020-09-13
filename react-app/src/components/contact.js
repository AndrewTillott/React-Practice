import React from 'react'
// we have automatically added to the props router infomation. because this is one of the components that the router loads up
const Contact = (props) =>{
    // the props have loads of different methods on it like: history, block, createHref, go, goBack, listen
    //console log props to see all of the methods added by the router
    // this method is saying after two seconds add this path to the history. Which will therefore take us to that page
    setTimeout((props)=>{
        props.history.push('/about');
    }, 2000)
    return (
     
        <div className="container">
            <h4 className="center">Contact</h4>
            <p className="">Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Dignissimos enim neque amet iusto. 
            Necessitatibus praesentium inventore rerum quos repudiandae corrupti 
            tempora laboriosam sint beatae fugit architecto, cum optio saepe totam?</p>
        </div>
    )
}

export default Contact;