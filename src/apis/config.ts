import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://dev.api.com'; // 현재 임의
const commonConfigs: AxiosRequestConfig = {
  baseURL,
  timeout: 10000, // ms, default 0 = no timeout
  transitional: { clarifyTimeoutError: true }, // ECONNABORTED -> ETIMEDOUT
  headers: {
    'Content-Type': 'application/json',
  },
};

// axios instance handling auth automatically with interceptro
// -----------------------------------------------------------------
export const client = axios.create(commonConfigs);

client.interceptors.request.use(onBeforeRequest, onRequestError);
client.interceptors.response.use(onBeforeResponse, onResponseError);

async function onBeforeRequest(config: AxiosRequestConfig) {
  console.log('- [axios] onBeforeRequest', config.url);

  return config;
}

function onRequestError(error: AxiosError) {
  console.log('- [client] onRequestError', error);
  return Promise.reject(error);
}

function onBeforeResponse(response: AxiosResponse) {
  console.log('- [axios] onBeforeResponse');
  return response;
}

const EXPECTED_ERRORS = [400, 401, 404, 500];
async function onResponseError(error: AxiosError) {
  console.log('- [axios] onResponseError');
  if (error.code === 'ETIMEDOUT') {
    console.log('e onResponseError E_TIMEOUT');
    return Promise.reject(error);
  }
  if (!error.response) {
    console.log('e onResponseError E_NO_RESPONSE');
    return Promise.reject(error);
  }
  if (EXPECTED_ERRORS.includes(error.response.status)) {
    console.log(`e onResponseError E_${error.response.status}`);
    return Promise.reject(error);
  }

  console.log('- onResponseError: unexpected', error?.response.status);
  return Promise.reject(error);
}
