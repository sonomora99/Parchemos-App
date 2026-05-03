import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '../../features/auth/screens/LoginScreen';
import LoginScreen from '../features/auth/screens/LoginScreen';
import { getFirstTime } from '../services/storage';
import Intro from '../features/auth/screens/Intro';
import { useEffect, useState } from 'react';
import CodeVerificateForLogPhone from '../features/auth/components/CodeVerificateForLogPhone';
import LoginPassword from '../features/auth/screens/LoginPassword';
import RegisterScreen from '../features/auth/screens/RegisterScreen';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {

  const [firstTime, setFirstTime] = useState(null);
  
    useEffect(() => {
      validateFirstTime();
    }, []);

  const validateFirstTime = async()=>{
    const firstTime = await getFirstTime();
    setFirstTime(firstTime)
  }

  return (
    <Stack.Navigator
      initialRouteName={firstTime==null?'Intro':'Login'}
    >
      
      <Stack.Screen name="Login" component={LoginScreen} options={{
            headerShown:false
          }}/>
      <Stack.Screen name="Intro" component={Intro} options={{
            headerShown:false
          }}/>
          <Stack.Screen name="CodeVerificateForLogPhone" component={CodeVerificateForLogPhone} options={{
            headerShown:false
          }}/>
          <Stack.Screen name="LoginPassword" component={LoginPassword} options={{
            headerShown:false
          }}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{
            headerShown:false
          }}/>
    </Stack.Navigator>
  );
}
