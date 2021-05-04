import { Summary } from './interfaces';
import axios from 'axios';

export const summary = async (): Promise<Summary> => {
    const res = await axios.get('https://api.covid19api.com/summary');
    return res.data;
};
