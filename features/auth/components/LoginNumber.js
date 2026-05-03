import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GlobalStyles from '../../../shared/theme/GlobalStyles';
import { View } from 'react-native';
// import {  Image, View } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, HelperText, IconButton, Text, TextInput } from 'react-native-paper'
import { validatePhoneNumber } from '../../../services/RegexValidators';
import BottomSheetSelect from '../../../shared/components/BottomSheetSelect';
import countries from 'world-countries';
// import { LinearGradient } from "expo-linear-gradient";
// import GlobalStyles from '../../../shared/theme/GlobalStyles';

export default function LoginNumber({ navigation, route }) {



  const [country, setCountry] = useState({ _id: "CO", value: "Colombia", flag: "", callingCode: "+57" });

  const [phoneNumber, setPhoneNumber] = useState();
  const countryList = countries.map(c => ({
    _id: c.cca2,
    value: c.name.common,
    flag: c.flag,
    callingCode: c.idd.root + (c.idd.suffixes?.[0] || ''),
  }));
  const sendCode = () => {

    if (phoneNumber != null) {

      //     userPhoneValidate("+"+callingCode+phoneNumber).then(res => {
      //     if (res.data){
      // let code = res.data.code
      let code = 1231231
      navigation.replace('CodeVerificateForLogPhone', { "countryCode": country._id, "callingCode": country.callingCode, "PHONENUMBER": phoneNumber, "codeVerificate": code });
      //     }
      //     else{
      //       const user = new User();
      //       user.phone = phoneNumber;
      //       user.callingCode = callingCode;
      //       user.countryCode = countryCode;
      //       navigation.navigate('Register',{user});
      //     }

      // });
    }
  }

  // const loginHandle = () => {
  //   navigation.replace('Login')
  // }


  const singUpHandle = () => {
    // setLoading(true);
    navigation.navigate('Register')
    // setLoading(false);

  }
  return (
    <KeyboardAwareScrollView contentContainerStyle={GlobalStyles.authForm}>
      <Text style={[GlobalStyles.formTitle]}>Ingresa tu número de celular</Text>
      <Text style={[GlobalStyles.formText]}>Te enviaremos un código si cuentas con un usuario registrado</Text>

      <View style={[GlobalStyles.formGroup, { marginTop: 25 }]}>
        <View style={[{ flexDirection: 'row', backgroundColor: '#fff', width: '80%', borderWidth: 1, borderRadius: 25, borderColor: '#fb3130' }]}>
          <BottomSheetSelect

            label="País"
            data={countryList}
            value={country.callingCode}
            searchable={true}
            onChange={(item) => setCountry(item)}
          />

          {/* <Text style={[{ marginTop: 'auto', marginBottom: 'auto', fontSize: 15, marginRight: 0 }]}>+{callingCode}</Text> */}
          <TextInput style={[GlobalStyles.formInput, { width: '69%', marginTop: 0, marginBottom: 0 }]}
            placeholder="Telefono"
            theme={{ roundness: 25 }}

            contentStyle={{ paddingTop: 2, paddingBottom: 0 }}
            mode='outlined'
            outlineStyle={{ borderColor: 'transparent' }}
            keyboardType="numeric"
            onChangeText={(value) => {
              setPhoneNumber(value);

            }}

            underlineColorAndroid="transparent"
            underlineColor='transparent'
            error={!validatePhoneNumber(phoneNumber)}
            value={phoneNumber}
            maxLength={10}

          />
        </View>


      </View>
      <View style={[GlobalStyles.formGroup, { marginBottom: 15, marginTop: 15 }]}>
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
      <Text style={[GlobalStyles.formText, { fontSize: 15 }]}>
        ¿No estas registrado?
        <Text style={[GlobalStyles.formText, { fontSize: 15, textDecorationLine: 'underline' }]} onPress={singUpHandle}> Crear cuenta</Text>
      </Text>

    </KeyboardAwareScrollView>
  );

}
