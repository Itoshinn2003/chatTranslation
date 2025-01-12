import axios from 'axios';
import { ref } from 'vue';
export let errors = ref<string[]>([]);
export let userData: string | null = window.sessionStorage.getItem('id');
export const index = async(params: {id: string | null}) => {
        const response = await axios.post('/api/user/current_user', params);
        return response.data.current_user as profileResponse
 }

 export const updateProfile = async(params: updateProfileApi) => {
   const response = await axios.post('/api/user/update', params);
   return response.data.current_user as profileResponse
 }