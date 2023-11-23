import { useNavigate } from "react-router-dom";
import { getPosts } from "./api/PostController";
import { useQuery } from "react-query";
import Post from "./components/Post";

function PostListPage() {
  const navigate = useNavigate();

  const {
    data: postsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;

  if (!postsData) return "No data available";

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "30px"
      }}
    >
      <h1>How to like Fubao</h1>
      <h3>with React-Query</h3>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "30px"
        }}
      >
        {postsData.map((post) => (
          <Post
            key={post.postId}
            postData={post}
            onClick={() => {
              navigate(`/post/${post.postId}`);
            }}
          />
        ))}
      </section>
    </main>
  );
}

export default PostListPage;
