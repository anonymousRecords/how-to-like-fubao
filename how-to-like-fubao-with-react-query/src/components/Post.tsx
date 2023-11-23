import { PostData } from "../data/type";

interface PostProps {
  postData: PostData;
  onClick: () => void;
}

export default function Post({ onClick, postData }: PostProps) {
  return (
    <article
      style={{
        width: "50%",
        objectFit: "cover",
        borderRadius: "10%",
        border: "3px solid black",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img
        src={postData.postImage}
        alt="fubao-post"
        style={{ borderTopRightRadius: "10%", borderTopLeftRadius: "10%" }}
      />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <p style={{fontWeight: 600}}>{postData.postId}번째 푸바오</p>
        <img
          alt="likeButton"
          src={
            postData.isLiked ? "/assets/heart-fill.svg" : "/assets/heart.svg"
          }
        />
        <p>{postData.likeCount}명이 푸바오를 사랑합니다</p>
      </section>
    </article>
  );
}
