import axios from 'axios';
import { ref } from 'vue';
export let errors = ref<string[] | null>([]);
export let formData: {
    user_id: String | null,
    name: String | null,
    password: String | null,
    language: String | null,
 } = {
    user_id:'',
    name:'',
    password:'',
    language:'',
 }

 export const signUp = async(params: typeof formData ) => {
    try {
        const response = await axios.post('/api/user/create', params);
        return response.data
    } catch (error: any) {
        errors.value = error.response.data
        console.log(errors.value);
        return errors
    }
 }