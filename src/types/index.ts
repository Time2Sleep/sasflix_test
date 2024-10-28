export type Post = {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: Reactions,
    views: number,
    userId: number
}

export type Reactions = {
    likes: number,
    dislikes: number
}

export type Comment = {
    id: number,
    body: string,
    postId: number,
    likes: number,
    user: User
}

export type User = {
    id: number,
    username: string,
    fullName: string
}