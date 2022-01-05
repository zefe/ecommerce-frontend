import axios from 'axios';
import { urlApi } from '../config';

export const instance = axios.create({
  baseURL: urlApi
});

export const config = {
  headers: {
      'Content-type': 'application/json'
  }
}
