import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchPost } from "../actions/index";

class PostsShow extends Component
{
    componentDidMount()
    {
        const {id}=this.props.match.params.id;
        this.props.fetchPost(id);
    }

    render()
    {
        const {post}=this.props;

        if(!post)
        {
            return <div>WAIT</div>
        }

        return(
            <div>
                <h3>Title: {post.title}</h3>
                <h5>Categories: {post.categories}</h5>
                <p>Content:{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps)
{
    return { post: posts[ownProps.match.params.id] }; 
}

export default connect(mapStateToProps,{fetchPost})(PostsShow);