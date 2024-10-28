import { Post } from "@/types";
import { ICommentsResponse, IPostsResponse } from "@/types/api";
import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/'
});

export const getPosts = (): Promise<AxiosResponse<IPostsResponse>> => {
    return axiosInstance.get('/posts', {
        params: {
            limit: 5
        }
    });
};

export const getPost = (postId: number): Promise<AxiosResponse<Post>> => {
    return axiosInstance.get(`/posts/${postId}`);
}

export const getPostComments = (postId: number): Promise<AxiosResponse<ICommentsResponse>> => {
    return axiosInstance.get(`/posts/${postId}/comments`);
};