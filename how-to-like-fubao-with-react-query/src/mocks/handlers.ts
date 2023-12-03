import { http, HttpResponse } from "msw";
import posts from "../data/posts.json";
import post1 from "../data/post/post1.json";
import post2 from "../data/post/post2.json";
import post3 from "../data/post/post3.json";

const map = new Map();

map.set("posts", posts);
map.set("post1", post1);

export const handlers = [
  http.get("/api/posts", () => {
    return HttpResponse.json(map.get("posts"));
  }),
  http.get("/api/post/1", () => {
    return HttpResponse.json(map.get("post1"));
  }),
  http.get("/api/post/2", () => {
    return HttpResponse.json(post2);
  }),
  http.get("/api/post/3", () => {
    return HttpResponse.json(post3);
  }),
  http.post("/api/like", async ({ request }) => {
    const json = (await request.json()) as { id: number };
    const post1 = map.get("post1");
    const posts = map.get("posts");

    map.set("post1", {
      ...post1,
      likeCount: post1.isLiked ? post1.likeCount - 1 : post1.likeCount + 1,
      isLiked: !post1.isLiked,
    });

    const newPosts = posts.map((post: { postId: number; }) => {
      if (post.postId === 1) {
        return map.get("post1");
      }
      return post;
    });

    map.set("posts", newPosts);
    return HttpResponse.json(json, { status: 201 });
  }),
];
