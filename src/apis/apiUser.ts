import { type AxiosResponse } from 'axios';
import { _axios, ResponseData } from '.';

/**
 * 用户个人信息
 */
export const getUserInfo = (): Promise<AxiosResponse<ResponseData<UserInfo>>> =>
  _axios.get('/xxx/api/user/info');
