import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useStore } from '../store';

type LoginData = {
  token: string;
  user: object;
};

export default function useAuth() {
  const setIsLoggedIn = useStore(state => state.setIsLoggedIn);
  const setUser = useStore(state => state.setUser);
  const reset = useStore(state => state.reset);

  const login = async (data: LoginData) => {
    const { token, ...user } = data;

    if (!token) {
      return Alert.alert('Login Failed', 'No token received');
    }

    // if success, store token in async storage
    await AsyncStorage.setItem('token', token);

    // if success, set isLoggedIn to true
    setUser(user);
    setIsLoggedIn(true);
    return true;
  };

  const logout = async () => {
    try {
      console.log('Logging out');
      // clear local storage
      await AsyncStorage.clear();
    } catch (e) {
      console.log('Error logging out');
      Alert.alert('Error', 'Error logging out');
    }

    // reset local store
    reset();
  };

  return { login, logout };
}
