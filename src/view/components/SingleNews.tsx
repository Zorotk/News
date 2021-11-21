import React from 'react';
import {useParams} from 'react-router-dom'
import {postAPI} from "../../services/PostService";
import {Link} from 'react-router-dom'

const SingleNews = () => {
    const {id} = useParams()
    const {data: post} = postAPI.useFetchOnePostQuery(id)
    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/news/${id}/edit`}>Edit this post</Link>
                </>
            )}
        </div>
    );
};

export default SingleNews;
