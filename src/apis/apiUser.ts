import { type AxiosResponse, type AxiosRequestConfig } from 'axios';
import { _axios, ResponseData } from '.';

/**
 * 新增用户
 */
export const postUser = (
  data: Omit<UserInfo, 'id'>,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<ResponseData<UserInfo>>> =>
  _axios.post('/xxx/api/user', data, config);

/**
 * 删除用户
 */
export const deleteUser = (
  id: number,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<ResponseData<boolean>>> =>
  _axios.delete(`/xxx/api/user/${id}`, config);

/**
 * 修改用户信息
 */
export const putUserInfo = (
  data: UserInfo,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<ResponseData<UserInfo>>> =>
  _axios.put('/xxx/api/user/info', data, config);

/**
 * 查询用户信息
 */
export const getUserInfo = (
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<ResponseData<UserInfo>>> =>
  _axios.get('/xxx/api/user/info', config);
