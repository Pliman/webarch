import { FetchWithPopover } from './common-service.js';
import { CONFIG } from '../constants/config';

const fetchWithPopover = new FetchWithPopover();

const API = {
  LOGIN: CONFIG.HOST + '/api/login'
};

export function login(param = {
  username: '',
  password: ''
}) {
  return new Promise(resolve => {resolve(1)})
}

// return fetchWithPopover123123.send123123({
//   method: 'POST',
//   url: API.LOGIN,
//   ...param
// });
