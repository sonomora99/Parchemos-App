import React, { useState } from 'react'
import {  Image, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, HelperText, IconButton, Text, TextInput } from 'react-native-paper'
import CountryPicker from 'react-native-country-picker-modal';
import { userPhoneValidate } from '../../services/Auth.service'
import { User } from '../../Models/User.model';
import LinearGradient from 'react-native-linear-gradient'
import {validatePhoneNumber} from '../Utils/RegexValidators';
import GlobalStyles from '../../../shared/theme/GlobalStyles';

export default function LoginNumber({navigation,route}) {
  
  

  const [countryCode, setCountryCode] = useState('CO');
  const [callingCode, setCallingCode] = useState('57');
  const [phoneNumber, setPhoneNumber] = useState();

  const sendCode= ()=> {
    
    if (phoneNumber != null) {
      
      userPhoneValidate("+"+callingCode+phoneNumber).then(res => {
      if (res.data){
      
        navigation.replace('CodeVerificateForLogPhone',{"countryCode":countryCode,"callingCode":callingCode,"PHONENUMBER": phoneNumber,"codeVerificate":res.data.code});
      }
      else{
        const user = new User();
        user.phone = phoneNumber;
        user.callingCode = callingCode;
        user.countryCode = countryCode;
        navigation.navigate('Register',{user});
      }
    
  });
  }
}

const loginHandle = () => {
  navigation.replace('Login')
}
  return (
    <LinearGradient colors={['#fb3130' , '#9a1e1d']} style={[GlobalStyles.body,GlobalStyles.backgroundSize]}>
      <View style={GlobalStyles.authLogo}>
      <IconButton
            icon="chevron-left"
            size={50}
            iconColor={'#FFFFFF'}
            onPress={loginHandle}
            style={[{position:'absolute',left:-40,top:30}]}
          />
      <Image style={[{resizeMode:'contain', height:'100%'}]} source={require('../../assets/logo2.png')} />
      </View>
      
      <KeyboardAwareScrollView  contentContainerStyle={GlobalStyles.authForm}>
        <Text style={[GlobalStyles.formTitle]}>Ingresa tu número de celular</Text>
        <Text style={[GlobalStyles.formText]}>Te enviaremos un código si cuentas con un usuario registrado</Text>
        
        <View style={[GlobalStyles.formGroup,{marginTop:25}]}>
        <View style={[ {flexDirection: 'row',backgroundColor:'#fff',width:'100%', borderWidth: 1,borderRadius: 25,borderColor:'#fb3130'   }]}>
        <CountryPicker
            withFilter
            countryCode={countryCode}
            withFlag
            withAlphaFilter={true}
            withCallingCode={true}
            onSelect={country => {
              const { cca2, callingCode } = country;
              setCountryCode(cca2);
              setCallingCode(callingCode[0])
            }}
            
            containerButtonStyle={{
              marginTop: 'auto',
              marginLeft:5,
              marginBottom: 'auto',

              
            }}
          />
          <Text style={[{ marginTop: 'auto', marginBottom: 'auto', fontSize: 15, marginRight: 0 }]}>+{callingCode}</Text>
            <TextInput style={[GlobalStyles.formInput,{width:'69%',marginTop:0,marginBottom:0}]}
              placeholder="Telefono"
              theme={{ roundness: 25}}
              
              contentStyle={{paddingTop:2,paddingBottom:0}}
              mode='outlined'
              outlineStyle={{borderColor:'transparent'}}
              keyboardType="numeric" 
              onChangeText={(value)=>{setPhoneNumber(value);
                
              }}
              
              underlineColorAndroid="transparent"
              underlineColor='transparent'
              error={!validatePhoneNumber(phoneNumber)}
              value={phoneNumber}
              maxLength={10}
              
            />
        </View>
        
            
        </View>
        <View style={[GlobalStyles.formGroup,{marginBottom:15,marginTop:15}]}>
          <HelperText
                  type="error"
                  padding="none"
                  visible={!validatePhoneNumber(phoneNumber)}
                  style={GlobalStyles.errorMessageInput}
                >
                  Ingrese un número valido
          </HelperText>
        </View>
        
        
            <Button
              mode="elevated"
              icon="phone"
              style={[GlobalStyles.formAuthButton,]}
              labelStyle={GlobalStyles.formAuthButtonLabel}
              onPress={sendCode}
            >
              Validar
            </Button>
        
      </KeyboardAwareScrollView>
     
    </LinearGradient>

  )
}
