import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { postAPI } from "../../services/PostService";
import { IPost } from "../../types/IPost";
import PostItem from "../components/PostItem";

const News = () => {
  const [limit, setLimit] = useState(100);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };
  let [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("news") || "";
  const [search, setsearch] = React.useState(postQuery);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const params: Record<string, string> = {};
    if (query.length) params.news = query;
    setSearchParams(params);
  };

  return (
    <div>
      <div className="post__list">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <input type="submit" />
        </form>
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts &&
          posts
            .filter((post) => post.title.includes(postQuery))
            .map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};
export default News;
