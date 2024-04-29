import { useEffect, useState } from "react";
import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  console.log("App rendered");
  console.log(posts);

  if (error) {
    return <>Error: {error}</>;
  }

  return (
    <>
      <h1>Hello from Posts</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.slice(0, 20).map((post) => {
          return <Post key={post.id} {...post} />;
        })
      )}
    </>
  );
}

export default Posts;
