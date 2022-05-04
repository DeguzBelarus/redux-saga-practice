import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { fetchPosts } from "../../redux/actions";
import { Loader } from "../Loader/Loader";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Загрузить
      </button>
    );
  }
  return posts.map((post, index) => <Post post={post} key={post.id} />);
};

// 1 04 45
