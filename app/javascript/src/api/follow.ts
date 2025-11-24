import axios from 'axios';

export const create = async(params: {id: string | null, opponentId: string | undefined}) => {
    const response = await axios.post('/api/follow/create', params);
    return response.data 
}


export const destroy = async(params: {id: string | null, opponentId: string | undefined}) => {
    const response = await axios.delete(`/api/follow/${params.id}`, {params});
    return response.data 
}


export const countFollow = async(params: {id: string | null | undefined}) => {
    const response = await axios.get(`/api/follow/countFollow`, {params});
    return response.data 
}