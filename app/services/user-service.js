import { FetchWithPopover } from './common-service.js';
import { API } from '../constants/api';

const fetchWithPopover = new FetchWithPopover();


export function login(param = {
  username: '',
  password: ''
}) {
  return fetchWithPopover.send({
    method: 'POST',
    url: API.LOGIN,
    param
  });
}
