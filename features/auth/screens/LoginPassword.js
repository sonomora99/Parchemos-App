import { Image, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from "expo-linear-gradient";
import { Button, HelperText, IconButton, Text, TextInput } from 'react-native-paper';

import { useState } from 'react';
// import { loginPhone, userLogin } from '../../services/Auth.service';
// import saveToken from '../Utils/SaveTokens';
// import Loading from '../Utils/Loading';
import GlobalStyles from '../../../shared/theme/GlobalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function LoginPassword ({navigation,route}) {

    const {username,phoneLogin} = route.params; 
    const [password,setPassword] = useState(null);
    const [invalidData,setInvalidData] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const loginUser= ()=>{
      setLoading(true);

        if(phoneLogin){
          setLoading(false);
            loginuserByphone()
        }else if(username){
          setLoading(false);
            singInHandle()
        }
        setLoading(false);
    }
    const loginHandle = () => {
      setLoading(true);
        navigation.replace('Login')
      }
    const loginuserByphone = ()=>{

        setInvalidData(false);
        if(phoneLogin != null && password != null ) {
          setLoading(true);
         
            loginPhone({"phone":phoneLogin,password}).then(res => {
              if(!res){
                setInvalidData(true);
                setLoading(false);
              }
              else if(res.data){
              saveToken(res.data.token, res.data.refreshToken)
              setLoading(true);
              navigation.replace('UserLogged');
              }
            });
          }
        
      }
      const singInHandle = () => {
        setInvalidData(false);
        setLoading(true);
        if(username != null && password != null ) {
          userLogin({username,password}).then(res => {
            if(!res){
              setInvalidData(true);
              setLoading(false);
            }
            else if(res.data){
            saveToken(res.data.token, res.data.refreshToken)
            setLoading(true);
            navigation.replace('UserLogged');
            }
          });
        }else{
          setInvalidData(true);
          setLoading(false);
        }
      }
      const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const returnPhone = () => {
    navigation.navigate('Login');
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
       <Text style={[GlobalStyles.formText]}>Ingresa tu contraseña</Text>
       
       <TextInput style={[GlobalStyles.formInput]}
              mode="outlined"
              theme={{ roundness: 25, }}
              placeholder="Contraseña"
              value={password}
              error={invalidData}
              contentStyle={
                {
                    paddingTop:0,
                    paddingBottom:0
                }
            }
              onChangeText = {(value)=> setPassword(value)}
             secureTextEntry={showPassword}
              right={
                <TextInput.Icon
                  icon={!showPassword ? 'eye' : 'eye-off'}
                  onPress={toggleShowPassword}
                />
              }
            />
      <View style={[GlobalStyles.formGroup,{marginBottom:15,marginTop:15}]}>
          <HelperText
                      type="error"
                      padding="none"
                      visible={invalidData}
                      style={GlobalStyles.errorMessageInput}
                    >
                      Contraseña incorrecta
              </HelperText>
        </View>
        
      <Button
              mode="elevated"
              onPress={loginUser}
              style={[GlobalStyles.formAuthButton,]}
              labelStyle={[GlobalStyles.formAuthButtonLabel]}
            >
              Ingresar
            </Button>
          </KeyboardAwareScrollView>
          

          
         
          
          
     
     
        </SafeAreaView>
      </View>
    </LinearGradient>
    //     <LinearGradient colors={['#fb3130' , '#9a1e1d']} style={[GlobalStyles.body,GlobalStyles.backgroundSize]}>
    //       {/* <Loading visible={loading} /> */}
    //         <View style={GlobalStyles.authLogo}>
    //         <IconButton
    //                 icon="chevron-left"
    //                 size={50}
    //                 iconColor={'#FFFFFF'}
    //                 onPress={loginHandle}
    //                 style={[{position:'absolute',left:-40,top:30}]}
    //             />
    //         <Image style={[{resizeMode:'contain', height:'100%'}]} source={require('../../../assets/icons/authLogo.png')} />
    //         </View> 
    //         <KeyboardAwareScrollView  contentContainerStyle={GlobalStyles.authForm}>
    //             <Text style={[GlobalStyles.formTitle]}>Ingresa tu contraseña</Text>
    //             <View style={[GlobalStyles.formGroup]}>
    //         <TextInput style={[GlobalStyles.formInput]}
    //           mode="outlined"
    //           theme={{ roundness: 25, }}
    //           placeholder="Contraseña"
    //           value={password}
    //           error={invalidData}
    //           contentStyle={
    //             {
    //                 paddingTop:0,
    //                 paddingBottom:0
    //             }
    //         }
    //           onChangeText = {(value)=> setPassword(value)}
    //          secureTextEntry={showPassword}
    //           right={
    //             <TextInput.Icon
    //               icon={!showPassword ? 'eye' : 'eye-off'}
    //               onPress={toggleShowPassword}
    //             />
    //           }
    //         />
    //         <View style={[GlobalStyles.formGroup]}>
    //           <HelperText
    //                   type="error"
    //                   padding="none"
    //                   visible={invalidData}
    //                   style={GlobalStyles.errorMessageInput}
    //                 >
    //                   Contraseña incorrecta
    //           </HelperText>
    //           </View>
    //         <Button
    //           mode="elevated"
    //           onPress={loginUser}
    //           style={[GlobalStyles.formAuthButton,]}
    //           labelStyle={[GlobalStyles.formAuthButtonLabel]}
    //         >
    //           Ingresar
    //         </Button>
    //     </View>
    //         </KeyboardAwareScrollView>
         
    // </LinearGradient>
     );
};