import axios from 'axios';
import { ref } from 'vue';
export let errors = ref<string[]>([]);
export const selfPosts = async(params: {id: string | null}) => {
    const response = await axios.post('/api/post/self_post', params);
    return response.data.posts as postResponse[]
}

export const index = async() => {
    const response = await axios.get('/api/post/index');
    return response.data.posts as postResponse[]
}

export const create = async(params: {id: string | null, postData: string | null}) => {
    try {
        const response = await axios.post('/api/post/create', params);
        errors.value = [];
        return response.data as postResponse
    } catch (error: any) {
        errors.value = error.response.data.error
        return error.response.data.error
    }
}

export type postResponse = {
    created_at: string,
    text: string,
    user: {
        name: string | null,
        profile_id: string,
    }
}
export type postProfile = {
    id: number,
    user_id: string,
    name: string | null,
}
