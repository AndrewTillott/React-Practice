import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        post: null
    }
    compoenentDidMount(){
        console.log(this.props);
        // react router provides extra information that is passed in as props
        // if you look in the console you can see that in the props --> match --> params ---> you can find the post_id
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts' + id)
        .then(res => {
            this.setState({
                post: res.data
            })
            console.log(res);
        })
       
    }
    render(){
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
            </div>
            ) : (
            <div className="center">Loading post...</div>
        )
        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

export default Post;