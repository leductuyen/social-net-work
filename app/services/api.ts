
import { useRuntimeConfig } from '#app'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface SendRequestOptions {
  method?: HttpMethod
  query?: Record<string, any>
  params?: Record<string, any>
  body?: any
  headers?: Record<string, string>
  timeout?: number
}

export async function sendRequest<DataT = any>(
  url: string,
  options: SendRequestOptions = {}
): Promise<DataT> {
  const config = useRuntimeConfig()

  return await $fetch<DataT>(url, {
    baseURL: config.public.apiBase,
    method: options.method || 'GET',
    query: options.query,
    params: options.params,
    body: options.body,
    headers: options.headers,
    timeout: options.timeout,
  })
}
