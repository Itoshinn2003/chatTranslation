import axios from 'axios';
import { ref } from 'vue';
export let errors = ref<string[]>([]);
export const showPosts = async(params: {id: string | null}) => {
    const response = await axios.post('/api/post/self_post', params);
    return response.data as postResponse
}

export const create = async(params: {id: string | null, postData: string | null}) => {
    try {
        const response = await axios.post('/api/post/create', params);
        errors.value = [];
        return response.data as postResponse
    } catch (error: any) {
        errors.value = error.response.data.error
        console.log(errors.value)
        return error.response.data.error
    }
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