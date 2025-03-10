import axios from 'axios';
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
        const response = await axios.post('/api/user/create', params);
        return response.data
 }