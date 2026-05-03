import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GlobalStyles from '../../../shared/theme/GlobalStyles';
import { Button, HelperText, IconButton, TextInput } from 'react-native-paper';
import { useState } from 'react';

export const LoginMail = ({ navigation, route}) => {
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [invalidData,setInvalidData] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
    setShowPassword(!showPassword);
};

 const forgotPasswordhandle = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("refreshToken")
    navigation.replace('UserValidate')
  }

  const singInHandle = () => {
  //   setInvalidData(false);
  //   setLoading(true);
  //   if(username != null && password != null ) {
  //     userLogin({username,password}).then(res => {
  //       if(!res){
  //         setInvalidData(true);
  //         setLoading(false);
  //       }
  //       else if(res.data){
  //       saveToken(res.data.token, res.data.refreshToken)
  //       setLoading(true);
  //       navigation.replace('UserLogged');
  //       }
  //     });
  //   }else{
  //     setInvalidData(true);
  //     setLoading(false);
  //   }
  }
 

   const singUpHandle = () => {
    // setLoading(true);
    navigation.replace('Register')
    // setLoading(false);

  }
  return (
    <KeyboardAwareScrollView  contentContainerStyle={GlobalStyles.authForm}>

        

         <Text style={[GlobalStyles.formTitle]}>Ingresar</Text>
         <Text style={[GlobalStyles.formText]}>Ingresa tu usuario y contraseña</Text>
         <View style={[GlobalStyles.formGroup]}>
           <TextInput style={[GlobalStyles.formInput]} 
            mode="outlined"
            value={username}
            error={invalidData}
            contentStyle={
              {
                  paddingTop:0,
                  paddingBottom:0
              }
          }
          onChangeText = {(value)=> setUsername(value)}
          
            theme={{ roundness: 25, }} placeholder="Correo" />
        </View>
        <View style={[GlobalStyles.formGroup]}>
        <TextInput style={[GlobalStyles.formInput]}
              mode="outlined"
              error={invalidData}
              theme={{ roundness: 25, }}
              placeholder="Contraseña"
              value={password}
              contentStyle={
                {
                    paddingTop:0,
                    paddingBottom:0
                }
            }
              onChangeText = {(value)=> setPassword(value)}
             secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye' : 'eye-off'}
                  onPress={toggleShowPassword}
                />
              }
            />
        </View>
        <View style={[GlobalStyles.formGroup]}>
        <HelperText
                type="error"
                padding="none"
                visible={invalidData}
                style={GlobalStyles.errorMessageInput}
              >
                Usuario o contraseña invalidos
        </HelperText>
        </View>
        
        <Text style={[GlobalStyles.formText,{fontSize:15}]} onPress={forgotPasswordhandle}>Haz olvidado tu contraseña?</Text>
            <Button
              mode="elevated"
              onPress={singInHandle}
              style={[GlobalStyles.formAuthButton,]}
              labelStyle={GlobalStyles.formAuthButtonLabel}
            >
              Ingresar
            </Button>
            <Text  style={[GlobalStyles.formText,{fontSize:15}]}>
             ¿No estas registrado? 
             <Text style={[GlobalStyles.formText,{fontSize:15, textDecorationLine:'underline'}]} onPress={singUpHandle}> Crear cuenta</Text>
           </Text>
           
      </KeyboardAwareScrollView>
  );
};