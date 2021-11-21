import React from 'react';
import {Link, useParams} from 'react-router-dom'
import {postAPI} from "../../services/PostService";
import {IPost} from "../../types/IPost";
import {useNavigate} from 'react-router-dom'


const EditNews = () => {
    const navigate = useNavigate()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const {id} = useParams();
    const {data: post} = postAPI.useFetchOnePostQuery(id)
    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ""
        if (post) updatePost({...post, title})
    }
    const goNews = () => {
        navigate('/news', {replace: true})
    }
    const handleRemove = (post: IPost) => {
        deletePost(post)
        goNews()
    }

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <button onClick={handleUpdate}>Edit</button>
                    <button onClick={() => handleRemove(post)}>Delete</button>
                    <Link to={`/news`}>All news</Link>
                    <button onClick={() => navigate(-1)}>Go back</button>
                </>
            )}
        </div>
    );
};

export default EditNews;
