import axios from 'axios';


export const showPosts = async(params: {id: string | null}) => {
    const response = await axios.post('/api/post/self_post', params);
    console.log(response.data)
    return response.data as postResponse
}

export const createPost = async(params: {id: string | null, postData: string | null}) => {
    const response = await axios.post('/api/post/create', params);
    console.log(response.data)
    return response.data as postResponse
}

export type postResponse = {
    current_user: postProfile,
    self_posts: post[]
}
export type postProfile = {
    id: number,
    user_id: string,
    name: string | null,
}
export type post = {
    created_at: string,
    text: string,
}