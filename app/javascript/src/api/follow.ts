import axios from 'axios';


export const create = async(params: {id: string | null, opponentId: string | undefined}) => {
    const response = await axios.post('/api/follow/create', params);
    return response.data 
}
