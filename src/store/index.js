import { createStore } from 'easy-peasy';
import schema from './schema';

const store = createStore(schema, {
  name: 'mail-app',
  devTools: true,
});

export { store };
