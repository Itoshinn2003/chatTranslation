import axios from 'axios';
import { ref } from 'vue';
export let errors = ref<string[]>([]);
export let userData: {
    id: String | null
 } = {
    id: window.sessionStorage.getItem('id'),
 }
 export const index = async(params: typeof userData) => {
        const response = await axios.post('/api/user/current_user', params);
        return response.data.current_user as profileResponse
 }

export type profileResponse = {
    user_id: string,
    name: string,
    language: string,
    sentence: string,
 }