/* eslint no-param-reassign: 0 */
import { action } from 'easy-peasy';
import { timeout } from '../utils/helpers';

const schema = {
  config: {
    value: {},
    update: action((state, payload) => {
      state.value = payload;
    }),
  },
  isOnline: {
    value: false,
    togggle: action((state, payload) => {
      state.value = payload;
    }),
  },
  isLoggedIn: {
    value: false,
    togggle: action((state, payload) => {
      state.value = payload;
    }),
    logout: action(async state => {
      try {
        state.value = false;
      } catch (e) {
        console.log('logout error', e);
      }
    }),
  },
  user: {
    value: {},
    update: action((state, payload) => {
      state.value = payload;
    }),
  },
};

export default schema;
