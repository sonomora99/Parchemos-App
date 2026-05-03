import React, { useState } from 'react'
import {  Image, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import GlobalStyles from '../../../shared/theme/GlobalStyles'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
// import { User } from '../../Models/User.model';
// import { loginPhone, userPhoneValidate } from '../../services/Auth.service';
// import saveToken from '../Utils/SaveTokens';

import { LinearGradient } from "expo-linear-gradient";
import { Button, HelperText, IconButton, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function CodeVerificateForLogPhone({navigation,route}) {
    const CELL_COUNT = 5;
    const [value, setValue] = useState('');
  const [phone,setPhone] = useState(route.params.PHONENUMBER)
  const [countryCode,setCountryCode] = useState(route.params.countryCode)
  const [callingCode,setCallingCode] = useState(route.params.callingCode)
  const [codeVerificate,setCodeVerificate] = useState(route.params.codeVerificate)
   const [validatingCode,setValidatingCode] = useState(true)

  
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const sendCode = ()=>{
  //   userPhoneValidate("+"+callingCode+phone).then(res => {
  //     if (res.data){
  //       console.log(res.data.code)
  //       setCodeVerificate(res.data.code)
  //     }
  //     else{
  //       const user = new User();
  //       user.phone = phone;
  //       user.callingCode = callingCode;
  //       user.countryCode = countryCode;
  //       navigation.navigate('Register',{user});
  //     }
    
  // });
  }
  
  const verifyCodeHandler = (value)=>{
    setValue(value)
    // if(value.length === CELL_COUNT && value == codeVerificate) {
      navigation.replace("LoginPassword",{"phoneLogin":"+"+callingCode+phone})
    // }
    // else{
    //   setValidatingCode(false)

    // }
  }
  const returnPhone = () => {
    navigation.navigate('Login')
  }
  

    return (
      <LinearGradient colors={['#ff012f' , '#000000']} style={[GlobalStyles.body,GlobalStyles.backgroundSize]}>
         <View style={GlobalStyles.overlay}>
        {/* add safe area for content, after backgrounds */}
        <SafeAreaView style={GlobalStyles.body}>

          
              <TouchableOpacity onPress={()=>{returnPhone()}}>
                <Ionicons name="chevron-back" size={40} color={'#fff'} style={{position: 'absolute',left: 10}} />
              </TouchableOpacity>
          
          <View style={[GlobalStyles.authLogo,]}>
            <Image  source={require('../../../assets/icons/authLogo.png')} />
          </View>

          
          
       <KeyboardAwareScrollView  contentContainerStyle={[GlobalStyles.authForm,{flex:1,alignContent:'center',marginTop:'20%',}]}>
       <Text style={[GlobalStyles.formText]}>Introduce el código enviado al siguiente número:</Text>
       <Text style={[GlobalStyles.formText,{fontWeight:'bold'}]}>{phone}</Text>
       {/* <Text  style={[GlobalStyles.formText,{fontSize:15}]}>
              ¿No es tú número? 
              <Text style={[GlobalStyles.formText,{fontSize:15, textDecorationLine:'underline'}]} onPress={returnPhone}> Editar</Text>
            </Text> */}
       <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={verifyCodeHandler}
        cellCount={CELL_COUNT}
        rootStyle={GlobalStyles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[GlobalStyles.cell, isFocused]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={[GlobalStyles.formGroup,{marginBottom:15,marginTop:15}]}>
          <HelperText
                  type="error"
                  padding="none"
                  visible={!validatingCode}
                  style={GlobalStyles.errorMessageInput}
                >
                  Código incorrecto
          </HelperText>
        </View>
        
      <Text  style={[GlobalStyles.formText,{fontSize:15}]}>
             ¿No recibiste tú código? 
             <Text style={[GlobalStyles.formText,{fontSize:15, textDecorationLine:'underline'}]} onPress={sendCode}> Reenviar</Text>
           </Text>
          </KeyboardAwareScrollView>
          

          
         
          
          
     
     
        </SafeAreaView>
      </View>
    </LinearGradient>

  )
}
//  <View style={GlobalStyles.authLogo}>
//         <IconButton
//               icon="chevron-left"
//               size={50}
//               iconColor={'#FFFFFF'}
//               onPress={returnPhone}
//               style={[{position:'absolute',left:-40,top:30}]}
//             />
//         <Image style={[{resizeMode:'contain', height:'100%'}]} source={require('../../../assets/icons/Icon2.png')} />
//         </View>
      
      