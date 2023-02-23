import { Post } from "../../types/Post";

type Props = {
  name: string;
  posts: Post[];
};

const Blog = ({ name, posts }: Props) => {
  return (
    <>
      <h1>Blog de {name}</h1>

      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: {
      name: "Yure",
      posts,
    },
    revalidate: 7200,
  };
};
export default Blog;
