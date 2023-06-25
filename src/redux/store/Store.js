import { legacy_createStore as createStore } from 'redux';
import rootReduser from '../reduser/Reduser';

export const store = createStore(rootReduser);
