import type { AxiosRequestConfig, AxiosInstance } from 'axios'

export interface AxiosInstanceNew extends AxiosInstance {
  <T = any, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D>
  request<T = any, D = ResponseResult<T>>(
    config: AxiosRequestConfig
  ): Promise<D>
  get<T = any, D = ResponseResult<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<D>
  delete<T = any, D = ResponseResult<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<D>
  head<T = any, D = ResponseResult<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<D>
  post<T = any, D = ResponseResult<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<D>
  put<T = any, D = ResponseResult<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<D>
  patch<T = any, D = ResponseResult<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<D>
}
