import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
// import { AuthContext } from '../app/providers/AuthProvider';
import { AuthContext } from './../providers/AuthProvider';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

export default function RootNavigator() {
  const { userToken } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userToken ? <MainNavigator /> :<AuthNavigator /> }
    </NavigationContainer>
  );
}
