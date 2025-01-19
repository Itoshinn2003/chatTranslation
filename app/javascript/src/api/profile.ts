import axios from 'axios';
import { ref } from 'vue';
export let errors = ref<string[]>([]);
export const currentUser = async(params: {id: string | null}) => {
      const response = await axios.post('/api/user/current_user', params);
      return response.data.current_user as profileResponse
 }

export const updateProfile = async(params: updateProfileApi) => {
   const response = await axios.post('/api/user/update', params);
   return response.data.current_user as profileResponse
}

export const show = async(params: {id: number | null}) => {
   const response = await axios.post(`/api/user/${params.id}`, params);
   console.log(response.data.user)
   return response.data.user as userResponse
}