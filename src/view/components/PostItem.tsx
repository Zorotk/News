import React, {FC} from 'react';
import {IPost} from "../../types/IPost";
import {Link} from 'react-router-dom'

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {

    return (
        <Link to={`/news/${post.id}`} className="post">
            {post.id}. {post.title}
        </Link>
    );
};

export default PostItem;
