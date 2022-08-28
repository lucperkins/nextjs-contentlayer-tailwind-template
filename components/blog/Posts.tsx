import { Post } from "contentlayer/generated";

import Card from "./Card";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 lg:gap-6">
      {posts.map((post) => (
        <Card key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
