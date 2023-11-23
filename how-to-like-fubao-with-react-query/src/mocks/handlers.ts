import { http, HttpResponse } from "msw";
import posts from "../data/posts.json";
import post1 from "../data/post/post1.json";
import post2 from "../data/post/post2.json";
import post3 from "../data/post/post3.json";

export const handlers = [
  http.get("/api/posts", () => {
    return HttpResponse.json(posts);
  }),
  http.get("/api/post/1", () => {
    return HttpResponse.json(post1);
  }),
  http.get("/api/post/2", () => {
    return HttpResponse.json(post2);
  }),
  http.get("/api/post/3", () => {
    return HttpResponse.json(post3);
  }),
];
