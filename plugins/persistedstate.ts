import { Plugin } from '@nuxt/types';
import createPersistedState from 'vuex-persistedstate';

const plugin: Plugin = ({ store }) => {
  createPersistedState({
    key: 'uma_tool',
  })(store);
};
export default plugin;
