import React, { useEffect, useRef, useState } from 'react'
import {  Animated, Dimensions, Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import GlobalStyles from '../../../shared/theme/GlobalStyles'
import { LinearGradient } from "expo-linear-gradient";
import { Button, HelperText, IconButton, Text, TextInput } from 'react-native-paper'
import Loading from '../../../shared/components/Loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthButton } from '../components/AuthButton';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LoginMail } from '../components/LoginMail';
import LoginNumber from '../components/LoginNumber';





export default function LoginScreen({ navigation }) {


  
  const [loading, setLoading] = useState(false);

 const [activeForm, setActiveForm] = useState(null);


  



  
  const loginGoogle = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();

  //     userLoginGoogle({"username":userInfo.user.email,"googleTkn":userInfo.user.id}).then(res => {
  //       if(!res){
  //         setInvalidData(true);
         
  //         const user = new User();
  //         user.name = userInfo.user.givenName;
  //         user.lastName = userInfo.user.familyName
  //         user.documentType = 1;
  //         user.mail = userInfo.user.email;
  //         user.googleTkn = userInfo.user.id
  //         userSigInGoogle(user).then((res) => {
  //           saveToken(res.data.token, res.data.refreshToken)
  //           navigation.replace('UserLogged');
  //         })
  //       }
  //       else if(res.data){
  //       saveToken(res.data.token, res.data.refreshToken)
  //       navigation.replace('UserLogged');
  //       }
  //     }).catch(err =>{
        
  //       const user = new User();
  //       user.name = userInfo.user.givenName;
  //       user.lastName = userInfo.user.familyName
  //       user.documentType = 1;
  //       user.mail = userInfo.user.email;
  //       user.googleTkn = userInfo.user.id
  //       userSigInGoogle(user).then((res) => {
  //         saveToken(res.data.token, res.data.refreshToken)
  //         navigation.replace('UserLogged');
  //       })
  //     });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
       

  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        

  //       // play services not available or outdated
  //     } else {
        

  //       // some other error happened
  //     }
  //   }
  };


  // const googleConfig =()=>{
  //   GoogleSignin.configure({
  //     androidClientId: '799478781945-eth6bo9o8inep45fkjcn6r3612a8r94p.apps.googleusercontent.com',
  //   });
  // }
  // useEffect(()=>{
  //   setLoading(false);
  //   googleConfig()
    
  // },[])
 

  const renderForm = () => {
    switch (activeForm) {
      case 'mail':
        return (
          <LoginMail/>
        );
      case 'phone':
        return (
          <LoginNumber/>
        );
      case 'google':
        return <Text style={styles.title}>Login con Google</Text>;
      case 'guest':
        return <Text style={styles.title}>Modo Invitado</Text>;
      default:
        return null;
    }
  };
  return (
    
    <ImageBackground source={require('../../../assets/authBackground.jpg')} resizeMode="cover" style={GlobalStyles.body}>
      <View style={GlobalStyles.overlay}>
        {/* add safe area for content, after backgrounds */}
        <SafeAreaView style={GlobalStyles.body}>

          {
            activeForm!==null && (
              <TouchableOpacity onPress={()=>{setActiveForm(null)}}>
                <Ionicons name="chevron-back" size={40} color={'#fff'} style={{position: 'absolute',left: 10}} />
              </TouchableOpacity>
            )

          }

          <View style={[GlobalStyles.authLogo,]}>
            <Image  source={require('../../../assets/icons/authLogo.png')} />
            <Text style={[GlobalStyles.introText]}>Tu pasaporte digital de experiencias</Text>
          </View>

          
          
          {/* forms view */}
          {
            activeForm !== null && (
              <View style={{flex:1,marginTop:'20%'}}> 
                {renderForm()}

                
              
              </View>


            )
          }

          
          {/* buttons view */}
          {
            activeForm=== null && (
            <View style={{flex:1, justifyContent:'flex-end'}}>
            <AuthButton
              text="Continuar con tu Email"
              backgroundColor='#ffffff'
              textColor='#000000'
              icon={<Ionicons name="mail-outline" size={25} color="#000000" />}
              onPress={() => setActiveForm('mail')}
            />

            

            <AuthButton
              text="Continuar con tu Celular"
              backgroundColor='#ffffff'
              textColor='#000000'
              icon={<Ionicons name="phone-portrait-outline" size={25} color="#000000" />}
              onPress={() => setActiveForm('phone')}
            />
            <AuthButton
              text="Continuar con Google"
              backgroundColor='#ffffff'
              textColor='#000000'
              icon={<Image
              source={require('../../../assets/icons/googleIcon.png')}
              style={{ width: 20, height: 20 }}
                />}
              onPress={() => handleSelect('login')}
            />
            <AuthButton
              text="Continuar con Instragram"
              backgroundColor='#ffffff'
              textColor='#000000'
              icon={<Image
              source={require('../../../assets/icons/instagramIcon.png')}
              style={{ width: 20, height: 20 }}
                />}
              onPress={() => handleSelect('login')}
            />
          </View>
            )

          }

          
          
          
     
     
        </SafeAreaView>
      </View>
    </ImageBackground>
    // <LinearGradient colors={['#fb3130' , '#9a1e1d']} style={[GlobalStyles.body,GlobalStyles.backgroundSize]}>
    //   <Loading visible={loading} />
    //   <View style={GlobalStyles.authLogo}>
    //     <Image style={[{resizeMode:'contain', height:'100%'}]} source={require('../../../assets/logo2.png')} />
    //   </View>
    //   <KeyboardAwareScrollView  contentContainerStyle={GlobalStyles.authForm}>
    //     <Text style={[GlobalStyles.formTitle]}>Ingresar</Text>
    //     <Text style={[GlobalStyles.formText]}>Ingresa tu usuario y contraseña</Text>
    //     <View style={[GlobalStyles.formGroup]}>
    //       <TextInput style={[GlobalStyles.formInput]} 
    //         mode="outlined"
    //         value={username}
    //         error={invalidData}
    //         contentStyle={
    //           {
    //               paddingTop:0,
    //               paddingBottom:0
    //           }
    //       }
    //       onChangeText = {(value)=> setUsername(value)}
          
    //         theme={{ roundness: 25, }} placeholder="Correo" />
    //     </View>
    //     <View style={[GlobalStyles.formGroup]}>
    //     <TextInput style={[GlobalStyles.formInput]}
    //           mode="outlined"
    //           error={invalidData}
    //           theme={{ roundness: 25, }}
    //           placeholder="Contraseña"
    //           value={password}
    //           contentStyle={
    //             {
    //                 paddingTop:0,
    //                 paddingBottom:0
    //             }
    //         }
    //           onChangeText = {(value)=> setPassword(value)}
    //          secureTextEntry={!showPassword}
    //           right={
    //             <TextInput.Icon
    //               icon={showPassword ? 'eye' : 'eye-off'}
    //               onPress={toggleShowPassword}
    //             />
    //           }
    //         />
    //     </View>
    //     <View style={[GlobalStyles.formGroup]}>
    //     <HelperText
    //             type="error"
    //             padding="none"
    //             visible={invalidData}
    //             style={GlobalStyles.errorMessageInput}
    //           >
    //             Usuario o contraseña invalidos
    //     </HelperText>
    //     </View>
        
    //     <Text style={[GlobalStyles.formText,{fontSize:15}]} onPress={forgotPasswordhandle}>Haz olvidado tu contraseña?</Text>
    //         <Button
    //           mode="elevated"
    //           onPress={singInHandle}
    //           style={[GlobalStyles.formAuthButton,]}
    //           labelStyle={GlobalStyles.formAuthButtonLabel}
    //         >
    //           Ingresar
    //         </Button>
    //         <Text  style={[GlobalStyles.formText,{fontSize:15}]}>
    //          ¿No estas registrado? 
    //          <Text style={[GlobalStyles.formText,{fontSize:15, textDecorationLine:'underline'}]} onPress={singUpHandle}> Crear cuenta</Text>
    //        </Text>
    //        <View style={[GlobalStyles.optionsBottom,GlobalStyles.row]}>
    //         <IconButton
    //           icon="cellphone"
    //           onPress={loginPhone} size={30}
    //           iconColor={'#FFFFFF'} 
    //         />
    //         <IconButton
    //         icon="google"
    //         onPress={loginGoogle} size={30}
    //         iconColor={'#FFFFFF'}
    //         />
    //       </View>
    //   </KeyboardAwareScrollView>
     
    // </LinearGradient>
  )
}
