/* functional compontent

import React from 'react'

const Home = () =>{
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <p className="">Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Dignissimos enim neque amet iusto. 
            Necessitatibus praesentium inventore rerum quos repudiandae corrupti 
            tempora laboriosam sint beatae fugit architecto, cum optio saepe totam?</p>
        </div>
    )
}

export default Home;

*/ 


// Class based compontent

import React, { Component } from 'react';
// you could otherwise use fetch, but netninja prefers axios
import axios from 'axios';
import {Link} from 'react-router-dom';
// importing the pokeball image
import Pokeball from '../pokeball.png'

class Home extends Component {
    state = {
        posts: [ ]
    }
    
    // asyncronus meaning it takes some time to do. We therefore can't just go underneath and say lets deal with the posts. That's why we need to use promise
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            this.setState({
                posts: res.data.slice(0, 10)
            })
        })
    }
    render(){
        // this is just using destructuring to get all of the state data and specifically getting the posts to be used in the component
        const { posts } = this.state;
        // using ternary operator. We are checking if there are any posts. Otherwise we don't want to loop
        // you can see that JSX is returned in parentheses if the conditions are met
        const postList = posts.length ? (
            posts.map(post =>{
                return (
                    <div className="post card" key={post.id}>
                        {/*Notice how a name was given to the pokeball image when it was imported which is now reused as the src*/}
                        <img src={Pokeball} alt="A "/>
                        <div className="card-content">
                            <Link to={'/' + post.id} >
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )


        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;