/* eslint-disable import/no-mutable-exports */
import { NuxtRuntimeConfig } from '@nuxt/types/config/runtime';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

let $axios: NuxtAxiosInstance;

export function initializeAxios(
  axiosInstance: NuxtAxiosInstance,
  _$config: NuxtRuntimeConfig
) {
  $axios = axiosInstance;
}

export { $axios };
