import * as SecureStore from 'expo-secure-store';

export const saveToken = (token) => SecureStore.setItemAsync('token', token);
export const getToken = () => SecureStore.getItemAsync('token');
export const removeToken = () => SecureStore.deleteItemAsync('token');
// const to validate if first time
export const setFirstTime = (firstTime) => SecureStore.setItemAsync('first',firstTime);
export const getFirstTime = () => SecureStore.getItemAsync('token');

