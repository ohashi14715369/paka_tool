import { Plugin } from '@nuxt/types';
import createPersistedState from 'vuex-persistedstate';

const plugin: Plugin = ({ store }) => {
  createPersistedState({
    key: 'paka_tool',
  })(store);
};
export default plugin;
