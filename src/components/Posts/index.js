import P from "prop-types";
import { PostCard } from "../PostCard";
import "./styles.css";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        cover={post.cover}
        id={post.id}
      />
    ))}
  </div>
);

Posts.defautProps = {
  posts: [],
};

Posts.protoTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      body: P.string.isRequired,
      cover: P.string.isRequired,
      id: P.number.isRequired,
    })
  ),
};