import { Post, Comment } from "."

interface IResponseBase {
    total: number,
    skip: number,
    limit: number
}

export interface IPostsResponse extends IResponseBase {
    posts: Post[]
}

export interface ICommentsResponse extends IResponseBase {
    comments: Comment[]
}