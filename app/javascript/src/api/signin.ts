import axios from 'axios';
import { ref } from 'vue';
export let errors = ref<string[]>([]);
export let formData: {
    user_id: String | null,
    password: String | null,
 } = {
    user_id:'',
    password:'',
 }

export const signIn = async(params: typeof formData ) => {
   const response = await axios.post('/api/session/create', params);
   return response.data
}