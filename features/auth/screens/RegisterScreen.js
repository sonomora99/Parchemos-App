import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Image, ImageBackground, Platform, TouchableOpacity, View } from 'react-native'
import GlobalStyles from '../../../shared/theme/GlobalStyles'
import { LinearGradient } from "expo-linear-gradient";
import { Banner, Button, HelperText, IconButton, Text, TextInput } from 'react-native-paper'
import Loading from '../../../shared/components/Loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthButton } from '../components/AuthButton';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LoginMail } from '../components/LoginMail';
import LoginNumber from '../components/LoginNumber';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BottomSheetSelect from '../../../shared/components/BottomSheetSelect';
import validatePasswordFormat, { ageAddmited, validateFields, validatePasswords, validatePhoneNumber } from '../../../shared/utils/RegexValidators';
import countries from 'world-countries';
import { DatePickerInput } from 'react-native-paper-dates';





export default function RegisterScreen({ navigation, route }) {


  const [userRegister, setUserRegister] = useState(null);
  const [name, setName] = useState(null);
  const [nameRequired, setNameRequired] = useState(false);
  const [lastName, setLastName] = useState(null);
  const [lastNameRequired, setLastNameRequired] = useState(false);
  const [password, setPassword] = useState()
  const [passwordRegex, setPasswordRegex] = useState(false)
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [passwordConfirmRequired, setPasswordConfirmRequired] = useState(false)
  const [document, setDocument] = useState()
  const [documentRequired, setDocumentRequired] = useState(false)
  const [documentType, setDocumentType] = useState({
    value: 'Tipo de documento',
    list: [
      { _id: '1', value: 'Cedula de ciudadania' },
      { _id: '2', value: 'Cedula de extrangería' },
      { _id: '3', value: 'Tarjeta de identidad' },
    ],
    selectedList: [],
    error: ''
  });
  const [documentTypeRequired, setDocumentTypeRequired] = useState(false);
  const [mail, setMail] = useState(null)
  const [mailRegex, setMailRegex] = useState(false);
  const [address, setAddress] = useState(null)
  const [addressRequired, setAddressRequired] = useState(false);
  const [country, setCountry] = useState({ _id: "CO", value: "Colombia", flag: "", callingCode: "+57" });
  const countryList = countries.map(c => ({
    _id: c.cca2,
    value: c.name.common,
    flag: c.flag,
    callingCode: c.idd.root + (c.idd.suffixes?.[0] || ''),
  }));
  const [phone, setPhone] = useState(null)
  const realPhone = `${country.callingCode}${phone}`;
  const [phoneRequired, setPhoneRequired] = useState(false);
  const [birthDate, setBirthDate] = useState(undefined)
  const [birthDateRequired, setBirthDateRequired] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [visible, setVisible] = useState(false)

  const [height, setHeight] = React.useState(0);

  const handleLayout = ({ nativeEvent }) => {
    const { height: layoutHeight } = nativeEvent.layout;
    setHeight(layoutHeight);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  //   const callValidators = ()=>{
  //     setNameRequired(validateFields(name));
  //     setLastNameRequired(validateFields(lastName));
  //     setPasswordRegex(validateFields(password) && validatePasswordFormat(password));
  //     setPasswordConfirmRequired(validateFields(passwordConfirm) && validatePasswordFormat(passwordConfirm) &&validatePasswords(password,passwordConfirm) );
  //     setDocumentTypeRequired(validateFields(documentType.value));
  //     setDocumentRequired(validateFields(document));
  //     setMailRegex(validateMail(mail));
  //     setAddressRequired(validateFields(address));
  //     setPhoneRequired(validateFields(phone) && validatePhoneNumber(phone));
  //     setBirthDateRequired(validateFields(birthDate) && ageAddmited(birthDate));
  //   }
  //   const validateForm = ()=>{
  //     callValidators();
  //       return nameRequired && 
  //     lastNameRequired && 
  //     passwordRegex &&
  //     passwordConfirmRequired && 
  //     documentTypeRequired &&
  //     documentRequired &&
  //     mailRegex &&
  //     addressRequired &&
  //     phoneRequired &&
  //     birthDateRequired;
  //   }
  const singInHandle = () => {
    //     if (validateForm()) {
    //       setVisible(false)
    //       if (validatePasswords(password, passwordConfirm) && validatePasswordFormat(password)) {
    //         userRegister.name = name;
    //         userRegister.lastName = lastName;
    //         userRegister.password = password;
    //         userRegister.document = document;
    //         userRegister.documentType = documentType.selectedList[0]._id;
    //         userRegister.mail = mail;
    //         userRegister.address = address;
    //         userRegister.phone = realPhone;
    //         userRegister.birthDate = formatDate(new Date(birthDate));
    //         setUserRegister(userRegister);
    //         registerUser(userRegister);
    //       }

    //     }else{
    //       setVisible(true)
    //     }

  }

  //   const registerUser = (userD) => {


  //     userSignIn(userD).then((res) => {
  //       saveToken(res.data.token, res.data.refreshToken)
  //       navigation.replace('UserLogged');
  //     })
  //   }

  //  const formatDate = (date) => {
  //   const day = String(date.getDate()).padStart(2,'0');
  //   const month= String(date.getMonth()+1).padStart(2,'0');
  //   const year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  //  };


  //   const validateMail = (mailValidate) => {
  //     let reg = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w\w+)+$/;
  //     const result = reg.test(mailValidate);
  //     return result;
  //   }
  //   const loginHandle = () => {
  //     navigation.replace('Auth')
  //   }


  const returnLoginForm = () => {
    navigation.replace("Login")
  }
  return (

    <ImageBackground source={require('../../../assets/authBackground.jpg')} resizeMode="cover" style={GlobalStyles.body}>
      <View style={GlobalStyles.overlay}>
        {/* add safe area for content, after backgrounds */}
        <SafeAreaView style={GlobalStyles.body}>
          <TouchableOpacity onPress={() => { returnLoginForm() }}>
            <Ionicons name="chevron-back" size={40} color={'#fff'} style={{ position: 'absolute', left: 10 }} />
          </TouchableOpacity>


          <View style={[GlobalStyles.authLogo,]}>
            <Image source={require('../../../assets/icons/authLogo.png')} />
            <Text style={[GlobalStyles.introText]}>Tu pasaporte digital de experiencias</Text>
          </View>


          <Banner
            onLayout={handleLayout}
            actions={[
              {
                label: 'Ok',
                onPress: () => setVisible(false),
              },
            ]}

            visible={visible}


            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }}
          >
            Campos incorrectos. Por favor verificar
          </Banner>
          <KeyboardAwareScrollView
            enableOnAndroid={false} // 👈 CLAVE
            enableAutomaticScroll={false} // 👈 MÁS IMPORTANTE
            extraScrollHeight={0}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{ flexGrow: 1 }}
            scrollEnabled={true}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={0} // 👈 importante
            contentContainerStyle={[GlobalStyles.authForm, { paddingBottom: '10%' }]}>
            <Text style={[GlobalStyles.formTitle]}>Ingresa tus datos</Text>
            <View style={[GlobalStyles.formGroup]}>
              <TextInput style={[GlobalStyles.formInput]}
                mode="outlined"
                contentStyle={
                  {
                    paddingTop: 0,
                    paddingBottom: 0
                  }
                }
                onChangeText={(value) => { setName(value); setNameRequired(validateFields(value)); }}
                value={name}
                error={!nameRequired}


                theme={{ roundness: 25, }} placeholder="Nombres" />
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 5, marginBottom: 5 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!nameRequired}
                style={GlobalStyles.errorMessageInput}
              >
                Campo obligatorio
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup]}>
              <TextInput style={[GlobalStyles.formInput]}
                mode="outlined"
                contentStyle={
                  {
                    paddingTop: 0,
                    paddingBottom: 0
                  }
                }
                onChangeText={(value) => { setLastName(value); setLastNameRequired(validateFields(value)); }}
                value={lastName}
                error={!lastNameRequired}


                theme={{ roundness: 25, }} placeholder="Apellidos" />
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 5, marginBottom: 5 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!lastNameRequired}
                style={GlobalStyles.errorMessageInput}
              >
                Campo obligatorio
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup]}>

              <Text style={GlobalStyles.infoMessageInput}>La contraseña debe contener minimo</Text>
              <Text style={GlobalStyles.infoMessageInput}>8 caracteres, 1 mayuscula, 1 minuscula, 1 número, 1 caracter especial</Text>

              <TextInput style={[GlobalStyles.formInput]}
                mode="outlined"
                error={!passwordRegex}
                contentStyle={
                  {
                    paddingTop: 0,
                    paddingBottom: 0
                  }
                }
                theme={{ roundness: 25, }}
                placeholder="Contraseña"
                value={password}
                onChangeText={
                  (value) => {
                    setPassword(value);

                    setPasswordRegex(validateFields(value) && validatePasswordFormat(value))
                  }}
                secureTextEntry={showPassword}
                right={
                  <TextInput.Icon
                    icon={!showPassword ? 'eye' : 'eye-off'}
                    onPress={toggleShowPassword}
                  />
                }
              />
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 5, marginBottom: 5 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!passwordRegex}
                style={GlobalStyles.errorMessageInput}
              >
                Contraseña no permitida
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup]}>
              <TextInput style={[GlobalStyles.formInput]}
                mode="outlined"
                error={!passwordConfirmRequired}
                theme={{ roundness: 25, }}
                contentStyle={
                  {
                    paddingTop: 0,
                    paddingBottom: 0
                  }
                }
                placeholder="Confirmar Contraseña"
                value={passwordConfirm}
                onChangeText={
                  (value) => {
                    setPasswordConfirm(value);
                    setPasswordConfirmRequired(validateFields(value) && validatePasswordFormat(value) && validatePasswords(password, value))
                  }}
                secureTextEntry={showConfirmPassword}
                right={
                  <TextInput.Icon
                    icon={!showConfirmPassword ? 'eye' : 'eye-off'}
                    onPress={toggleShowConfirmPassword}
                  />
                }
              />
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 5, marginBottom: 10 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!passwordConfirmRequired}
                style={GlobalStyles.errorMessageInput}
              >
                Las contraseñas no coinciden
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup, GlobalStyles.inputForm, { borderColor: !documentTypeRequired ? '#f00' : '' }]}>
              <BottomSheetSelect
                wrapper={{
                  marginTop: -3,
                  marginBottom: -5,
                }}
                label="Tipo de documento"
                data={documentType.list}
                value={documentType.value}
                error={!documentTypeRequired}
                onChange={(item) => {
                  setDocumentType({
                    ...documentType,
                    value: item.value,
                    selectedList: [item],
                    error: 'Campo obligatorio',
                  });

                  setDocumentTypeRequired(validateFields(item.value));
                }}
              />
            </View>
            <View style={[GlobalStyles.formGroup, , { marginTop: 15, marginBottom: 5 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!documentTypeRequired}
                style={[GlobalStyles.errorMessageInput, { marginTop: -15 }]}
              >
                Campo obligatorio
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup,]}>
              <TextInput style={[GlobalStyles.formInput]}
                keyboardType="numeric"
                mode="outlined"
                onChangeText={(value) => { setDocument(value); setDocumentRequired(validateFields(value)); }}
                value={document}
                error={!documentRequired}
                contentStyle={
                  {
                    paddingTop: 0,
                    paddingBottom: 0
                  }
                }
                maxLength={10}
                theme={{ roundness: 25, }} placeholder="Número de documento" />
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 5, marginBottom: 5 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!documentRequired}
                style={GlobalStyles.errorMessageInput}
              >
                Campo obligatorio
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup]}>
              <TextInput style={[GlobalStyles.formInput]}
                keyboardType="email-address"
                mode="outlined"
                onChangeText={(value) => { setMail(value); setMailRegex(validateMail(value)) }}
                value={mail}
                error={!mailRegex}

                contentStyle={
                  {
                    paddingTop: 0,
                    paddingBottom: 0
                  }
                }
                theme={{ roundness: 25, }} placeholder="Correo" />
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 5, marginBottom: 5 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!mailRegex}
                style={GlobalStyles.errorMessageInput}
              >
                Ingrese un correo valido
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup]}>
              <TextInput style={[GlobalStyles.formInput]}
                mode="outlined"
                onChangeText={(value) => { setAddress(value); setAddressRequired(validateFields(value)) }}
                value={address}
                error={!addressRequired}

                contentStyle={
                  {
                    paddingTop: 0,
                    paddingBottom: 0
                  }
                }
                theme={{ roundness: 25, }} placeholder="Dirección" />
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 5, marginBottom: 5 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!addressRequired}
                style={GlobalStyles.errorMessageInput}
              >
                Campo obligatorio
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup, GlobalStyles.inputForm, { marginTop: 10, marginBottom: 5, height: '4.5%', borderColor: !phoneRequired ? '#f00' : '' }]}>
              {/* <View style={[{ flexDirection: 'row', backgroundColor: '#fff', width: '100%', borderWidth: 1, borderRadius: 25, borderColor: 'transparent' }]}> */}
              <BottomSheetSelect
                wrapper={{
                  marginTop: -5,
                  marginBottom: -5,
                }}
                label="País"
                data={countryList}
                value={country.callingCode}
                searchable={true}
                onChange={(item) => setCountry(item)}
              />
              <TextInput style={[GlobalStyles.formInput, { width: '60%', marginTop: 0, marginBottom: 0, backgroundColor: 'transparent', }]}
                placeholder="Telefono"
                theme={{ roundness: 25 }}
                keyboardType="numeric"
                contentStyle={{ paddingTop: 0, paddingBottom: 0, marginTop: 'auto', backgroundColor: 'transparent', }}
                mode='outlined'
                outlineStyle={{ borderColor: 'transparent' }}
                error={phoneRequired}

                onChangeText={(value) => { setPhone(value); setPhoneRequired(validateFields(value) && validatePhoneNumber(phone)); }}
                value={phone}
                editable={phone == null}
                maxLength={10}

              />
              {/* </View> */}
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 15, marginBottom: 5 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!phoneRequired}
                style={GlobalStyles.errorMessageInput}
              >
                Ingrese un número valido
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 10, }, GlobalStyles.inputForm]}>
              <DatePickerInput
                locale="es"
                style={{ backgroundColor: 'transparent', height: 35 }}

                label="fecha nacimiento"
                value={birthDate}
                onChange={(d) => { setBirthDate(d); setBirthDateRequired(validateFields(d) && ageAddmited(d)); }}
                validRange={{ endDate: new Date() }}
                inputMode='start'
                mode='outlined'
                outlineStyle={{ borderColor: 'transparent' }}
                error={birthDateRequired}
              />
            </View>

            <View style={[GlobalStyles.formGroup, { marginTop: 25 }]}>
              <HelperText
                type="error"
                padding="none"
                visible={!birthDateRequired}
                style={GlobalStyles.errorMessageInput}
              >
                Campo obligatorio
              </HelperText>
            </View>
            <View style={[GlobalStyles.formGroup, { marginTop: 10 }]}>
              <Button
                mode="elevated"
                style={[GlobalStyles.formAuthButton,]}
                labelStyle={GlobalStyles.formAuthButtonLabel}
                onPress={singInHandle}
              >
                Registrarse
              </Button>
            </View>

          </KeyboardAwareScrollView>


        </SafeAreaView>
      </View>
    </ImageBackground>

  )
}
