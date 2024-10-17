import axios from 'axios';

export const fetchData = async (url: string): Promise<any> => {
    const response = await axios.get(url);

    return response.data;
} 