import { Plugin } from '@nuxt/types';
import { initializeAxios } from '~/utils/api';

const accessor: Plugin = ({ $axios, $config }) => {
  initializeAxios($axios, $config);
};

export default accessor;
