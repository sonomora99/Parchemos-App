import { Animated, FlatList, Image, View, useWindowDimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import slides from './slides';
import GlobalStyles from '../../../shared/theme/GlobalStyles'
import { Button, IconButton, Text } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { setFirstTime } from "../../../services/storage";

export default function Intro({navigation}) {
    const { width, height} = useWindowDimensions();

    useEffect(() => {
          changeFirstTime();
        }, []);
    
      const changeFirstTime = async()=>{
        setFirstTime("1");
      }

    const startApplication = ()=>{
        changeFirstTime
        navigation.replace("Login")
    }

    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <FlatList 
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item)=>item.id}
                onScroll={Animated.event([{nativeEvent:{ contentOffset:{x:scrollX}}}],{
                    useNativeDriver:false,
                })}
                data={slides} renderItem={({ item }) => 
                <View style={[GlobalStyles.body, GlobalStyles.backgroundSize,{backgroundColor:'#fff'},{width, height}]}>
                    <View style={GlobalStyles.infoLogo}>
                        <Image style={[{ resizeMode: 'contain', height: '100%' }]} source={require('../../../assets/logo.png')} />
                    </View>
                    <View style={[GlobalStyles.authForm]}>
                        <Text style={[GlobalStyles.introTitle,GlobalStyles.introFont, { width:'100%',marginBottom:10,textAlign: 'center'}]}>{item.title}</Text>
                      
                        <Text style={[GlobalStyles.introText,GlobalStyles.introFont, { marginBottom: 20 }]}>{item.description}</Text>

                        <View style={[GlobalStyles.formGroup]}>
                                <Image style={[{ resizeMode: 'contain', height: 250, marginBottom:10 }]} source={item.image} />
                        </View>
                        <View style={[GlobalStyles.formGroup]}>
                            <View style={{flexDirection:'row', height: 30}}>
                                {
                                    slides.map((_,i) =>{
                                        const inputRange = [(i-1) * width, i * width, (i + 1) * width];
                                        const dotWidth = scrollX.interpolate({
                                            inputRange,
                                            outputRange:[10,10,10],
                                        })

                                        const opacity = scrollX.interpolate({
                                            inputRange,
                                            outputRange:[0.3, 1 , 0.3],
                                            extrapolate: 'clamp',
                                        })
                                        return <Animated.View key={i} style={[{height:10,borderRadius:5,backgroundColor:'#ff3030', marginHorizontal:8},{width:dotWidth,opacity}]} />
                                    })
                                }
                            </View>
                        </View>
                        <View style={[GlobalStyles.formGroup]}>
                        {
                                    item.showButton?
                                    <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={['#ff3030', '#ee095a']} style={{ borderRadius:25, marginTop:2, width:'95%'}}>
                                    <Button
      
                                    onPress={startApplication}
                                    style={[GlobalStyles.introButton]}
                                    labelStyle={[{color:'#fff'}]}
                                    >
                                    <Text style={{fontWeight: 'bold', color:'#fff', fontSize:15, marginTop:0,marginBottom:3}}>Comienza</Text> 
                                    </Button>
                                    </LinearGradient>
                                    :
                                    <Text></Text>
                                }
                        </View>
                        
                        

                    </View>
                </View>
            } />
        </View>
    );
};