import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '../../features/auth/screens/LoginScreen';
import LoginScreen from '../features/auth/screens/LoginScreen';
import { getFirstTime } from '../services/storage';
import Intro from '../features/auth/screens/Intro';
import { useEffect, useState } from 'react';
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
      initialRouteName={firstTime!=null?'Login':'Intro'}
    >
      
      <Stack.Screen name="Login" component={LoginScreen} options={{
            headerShown:false
          }}/>
      <Stack.Screen name="Intro" component={Intro} options={{
            headerShown:false
          }}/>
    </Stack.Navigator>
  );
}
