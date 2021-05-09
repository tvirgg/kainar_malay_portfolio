import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const initialState = {
  data: [],
  roler: 'HOME',
  ConnectionImage: 1,
  CurentOption: {
    Path: '../assets/options/1.png',
    Name: 1
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setCurrentLocation':
      return {...state, roler: action.value};
    case 'setCurrentConnectionImage':
      return {...state, ConnectionImage: action.value};
    case 'setCurentOption':
      let c = Math.trunc(( action.value+60)/60);
      return {...state,
        CurentOption:{
          Path: '../assets/options/'+ c + '.png',
          Name: c
        }}
    default:
      return state;
  }
};

export const setCurrentLocationC = location => {
  return {
    type: 'setCurrentLocation',
    value: location,
  };
};
export const setCurentOptionC = name => {
  return {
    type: 'setCurentOption',
    value: name,
  };
};
export const setCurrentConnectionImageC = img => {
  return {
    type: 'setCurrentConnectionImage',
    value: img,
  };
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};
