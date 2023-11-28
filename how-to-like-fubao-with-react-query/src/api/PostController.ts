import { PostData } from "../data/type";
import { baseAxios } from "./baseAxios";

export const getPosts = async () => {
  const response = await baseAxios
    .get<PostData[]>("/api/posts")
    .then((res) => res.data);
  console.log("포스트 목록 : ", response);
  return response;
};

export const getPost = async (id: number) => {
  const response = await baseAxios
    .get<PostData>(`/api/post/${id}`)
    .then((res) => res.data);
  console.log("상세 포스트 : ", response);
  return response;
};

export const postLike = async (id: number) => {
  const response = await baseAxios.post(`/api/like`, { id });
  return response;
};
