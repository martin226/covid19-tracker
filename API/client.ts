import axios from 'axios';
import { Summary } from './interfaces';

export default async (): Promise<Summary> => {
    const res = await axios.get('https://api.covid19api.com/summary');
    return res.data;
};
