import DetailPost from "./components/DetailPost";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPost } from "./api/PostController";

function PostPage() {
  const navigate = useNavigate();
  const params = useParams();

  const {
    data: postData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", params.id],
    queryFn: () => getPost(Number(params.id)),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;

  if (!postData) return "No data available";

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        paddingTop: "30px",
      }}
    >
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{border: '1px solid #AEAEAE', borderRadius: '5px', backgroundColor:'white', color: '#AEAEAE', cursor: 'pointer'}}
      >
        더 많은 푸바오 보러 돌아가기
      </button>
      <DetailPost postData={postData} />
    </main>
  );
}

export default PostPage;
