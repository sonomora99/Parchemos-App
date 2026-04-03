import { Dimensions, StyleSheet } from "react-native";
import { overlay } from "react-native-paper";
// import Variables from "./Variables";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
export default StyleSheet.create({
  body: {
    flex: 1,
  },
  backgroundSize:{
    height:'100%'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  authLogo:{
    flex:1,
    justifyContent:'flex-start',
    height:'50%',
    marginTop:'10%',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:'10%',
    alignItems:'center'
  },
  infoLogo:{
    flexDirection:'row',
    height:(ScreenHeight*0.02)+'%',
    marginTop:'10%',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:'10%'
  },
  authForm:{
    alignItems:'center',
   
  },
  authBottomOptions:{
    marginTop:'10%',
    marginBottom:'10%',
    backgroundColor:'green',
    height:10,
    marginLeft:'10%',
    marginRight:'10%'
  },
  introTitle:{
    fontWeight:'bold',
    fontSize:18,
    marginTop:5,
    marginBottom:5,
    color:'#000000'
  },
  introText:{
    textAlign:'center',
    fontSize:20,
    marginTop:30,
    marginBottom:5,
    color:'#ffffff'

  },
  formTitle:{
    fontWeight:'bold',
    fontSize:20,
    marginTop:5,
    marginBottom:5,
    color:'#FFFFFF'
  },
  formText:{
    textAlign:'center',
    fontSize:20,
    marginTop:5,
    marginBottom:5,
    color:'#FFFFFF'

  },
  errorMessageInput:{
    color:'#FFFFFF',
    fontSize:10,
    width:'100%',
    marginLeft:10,
    marginTop:-20,
    textAlign:'left'
  },
  infoMessageInput:{
    color:'#FFFFFF',
    // backgroundColor:'#000000',
    fontSize:10,
    width:'100%',
    marginLeft:10,
    marginTop:7,
    top:-1,
    marginBottom:-5,
    textAlign:'left',
    // position:'absolute'
  },

  formGroup:{
    width:'100%',
    alignItems:'center'
  },
  inputForm:{
    flexDirection: 'row',
    backgroundColor:'#fff',
    width:'100%',
     borderWidth: 1,
     borderRadius: 25,
     borderColor:'transparent' 
    
    },
  formInput:{
    width:'100%',
    height:42,
    marginTop:5,
    marginLeft:'5%',
    marginRight:'5%',
    marginBottom:15,
    backgroundColor:'#FFFFFF',
    color:'#000000',
    paddingTop:0,
    paddingBottom:0
  },
  searchContainer:{
    width:'100%',
    // height:45,
    
    marginBottom:15,
    marginBottom:1,
    marginBottom:5,
    color: "#fff",
  },
  searchContainerInput:{
    // width:'100%',
    marginLeft:'5%',
    marginRight:'5%',
    marginBottom:15,
    marginTop:20,
    marginBottom:1,
    marginBottom:5,
    color: "#fff",
   borderRadius:25
  },button:{
    padding: 5,
    alignItems:"center",
    justifyContent:"center",
    padding:8,
    backgroundColor:"#fb3130",
    borderRadius:8
  },buttonText:{
    fontSize:15,
    color:'#fff'
  },
  searchContainerButton:{
    marginLeft:10,
    width:100,
    padding:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:5,
    marginTop:5,
    marginBottom:1,
    marginBottom:5,
    backgroundColor: "#fff",
   borderRadius:25
  },
  searchInput:{
    width:'100%',
    height:40,
    color: "#fff",
    paddingTop:0
  },
  
  formAuthButton:{
    width:'100%',
    backgroundColor:'#FFFFFF',
    color:'#FFFFFF',
    marginTop:5,
    marginBottom:5,
    marginLeft:'auto',
    marginRight:'auto'
  },
  introFont:{
    fontFamily:'poppins'
  },
  introButton:{
    width:'100%',
    backgroundColor:'transparent',
    color:'#FFFFFF',
    marginTop:5,
    marginBottom:5,

  },

  optionsBottom:{
    marginTop:10,
    marginBottom:20,
    height:'20%'
  },
  row:{
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  widthScreen:{
    width:(ScreenWidth*0.12)+'%',
  },
header:{
  backgroundColor:'#000000',
    height:15,
    width:'100%',
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10,
    paddingRight:10,
    paddingLeft:10,
    backgroundColor:'#fff'
  },
  formAuthButtonLabel:{
    // width:'100%'
  },
  mapContainer:{
    flex:1,
    alignItems: "center",
      justifyContent: "flex-start",
  },
   mapSearchBox: {
    position:"absolute",
    width: "90%",
    borderRadius:8,
    borderWidth:1,
    borderColor:"#aaa", 
    backgroundColor:"#fff",
    marginTop:10,
    padding:8,
  },
  mapSearchBoxField: {
    borderColor:"#777",
    borderWidth:1,
    borderRadius:4,
    paddingHorizontal:8, 
    paddingVertical:4,
    fontSize:18,
    marginBottom:8,
  },
  mapButtonBox: {
    width: "20%",
    borderColor:"#aaa", 
    marginLeft:-200,
    marginTop:-70,
    position:"relative",
  },
  mapButtonContainer: {
   alignItems:"center",
   justifyContent:"center",
   padding:8,
   backgroundColor:"#fb3130",
   borderRadius:8
  },
  mapButtonLabel: {
    fontSize:18,
    color: "#fff"
  
  },
  mapButtonBoxAccept: {
    flexDirection: 'row',
    position: "absolute",
    bottom: 50,
    left: "22%",
  },
  mapReturn: {
    left: 20,
    top: 20, 
    marginRight:10,
  },
  
  mapButtonContainerAccept: {
    alignItems:"center",
    justifyContent:"center",
    padding:19,
    backgroundColor:"#fb3130",
    borderRadius:8
  },
     buttonLabelAccept: {
       fontSize:18,
       color: "#fff"
     
     },
     homeScrollContainer:{
      width:'100%',
      marginTop:10,
      marginBottom:10
    },
     homeSearchButton:{
       marginTop:20,
       marginBottom:1,
       marginBottom:5,
       color: "#fff"
     },
     sheetTitle:{
      marginTop:'5%',
      fontWeight: 'bold',
        fontSize: 18,
        flexWrap:'wrap',
        marginLeft:'10%',
        marginRight:'10%',
        textAlign:'center'
     }, 
     homeNoticeMessage:{
      width:'100%',
      marginRight:'auto',
      marginLeft:'auto',
      borderRadius: 30,
      flexDirection: 'row', 
      marginRight: 'auto',
      marginBottom:'5%',
      marginTop:'5%',
      shadowColor: '#000',
      shadowOffset:{ width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 2,
      
     },
     noticeTextBackground:{
       alignItems:'center',
        backgroundColor:'#0008'
     },
     noticeBorderRadius:{
      borderRadius:15
     },
     noticeText:{
      color:'#ffffff',
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center'
     },
     homeCategoriesList:{
      // flexDirection:'column',
      marginTop:0,
       marginRight:10,
       marginLeft:10,
       marginBottom:10,
       borderRadius:10,
       padding:5,
       justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        width:90,
        height:90
     },
     categoryButtonCenter:{
      borderRadius: 10,  
      marginTop:10, 
      marginBottom:10
     },
     categoriesImage:{
      marginLeft:50
     },
     categoriesText:{
      fontWeight: 'bold',
      marginLeft:5,
      marginRight:'auto', 
      paddingTop:15,
      paddingBottom:'auto'
     },
     categoriesButton:{
      marginLeft:'auto',
      marginRight:'auto', 
      paddingLeft:10,
      paddingRight:10
     },detailsBody:{
      flex: 1,
      position: 'relative', 
      paddingLeft: 0, 
      paddingRight: 0
     },detailCardBodyContainer:{
      marginTop: 20, 
      marginLeft: '5%', 
      marginRight: '5%', 
      marginBottom: '5%', 
      backgroundColor: '#ffffff'
     },detailCardBody:{
      marginTop: 20, 
      marginLeft: '5%', 
      marginRight: '5%', 
      backgroundColor: '#ffffff' 
     },detailCardTextContent:{
      width: '90%', 
      marginRight: 30, 
      marginLeft: 10, 
      fontWeight: 'bold', 
      paddingTop: 5 
     },
     detailcardTextNames:{
      fontWeight: 'bold', 
      fontSize: 20, 
      marginBottom: 5
     },
     detailSurfaceBody:{
      height: '10%', 
      marginTop: 5, 
      backgroundColor: '#fff', 
      paddingLeft: 15, 
      paddingRight: 20, 
      paddingTop: 5
     }
     ,detailSurfaceContainerView:{
      flexDirection: 'row', 
      paddingBottom: 1,
     },
     detailSurfaceContainer:{
      flexDirection: 'row', 
      marginTop: 'auto', 
      marginBottom: 'auto', 
      borderRadius: 100,
      marginLeft:5,
      alignItems:'center'
      // marginRight:50
     },
     detailSurfaceText:{
      fontSize: 16, 
      fontWeight: 'bold', 
     
     },
     detailSurfacePresableLeft:{
      marginTop: 'auto', 
      marginBottom: 'auto', 
      marginLeft: 5, 
      
     },
     detailSurfacePresableRight:{
      marginTop: 'auto', 
      marginBottom: 'auto', 
      // marginLeft: 5, 
      // marginRight: 10
     },
      detailsButtonPresableHomeHandle:{
      width: 30, 
      height: 30, 
      marginLeft: '10%', 
      marginTop: '30%'
    },
    headerContainer: {
      height: 56,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft:'2%',
      paddingRight:'6%'
    },
    headerLocationButtonContainer: {
      width: '75%',
      justifyContent: 'center',
    },
    headerLocationButton: {
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 5,
      marginBottom: 5,
    },
    headerLocationButtonLabel: {
      fontSize: 8,
      marginTop: 0,
      marginBottom: 0,
      color: 'red',
    },
    headerLocationButtonText: {
      fontSize: 14,
    },
    headerCartContainer: {
      position: 'relative',
    },
    headerBadge: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: 'red',
      color: 'white',
      fontSize: 12,
    },
     homeTitleContainer:{
      flexDirection: 'row', position:'relative' 
     },
     homeTitle:{
      fontWeight: 'bold',
      fontSize:16
     },
     homeTitleButton:{
      position:'absolute',
      //  left:'80%',
      right:0,
       marginTop:'auto',
       marginBottom:'auto',
       marginRight:4
     },
     homeTitleButtonText:{
      fontWeight:'bold',
      textDecorationLine:'underline',
      color:'red'
    },
    homeCard:{ 
      width: 260,
      backgroundColor:'#ffffff',
      margin:10
    },
    homeCardContentTitle:{
      width: '100%',
       marginBottom: 15
    },
    optionContainerView:{
      fontSize: 18,
      fontWeight: 'bold', 
      marginVertical: 10,
      color: '#000'
    },
    optionPressableView:{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10, 
      backgroundColor: '#fff'
    },
    optionIconButton:{
      width: 40,
      height: 40,
      marginLeft: 10
    },optionDraweImageInitial:{
      width: 50, 
      height: 50, 
      marginLeft: 10, 
      marginTop: 'auto', 
      marginBottom: 'auto'
    },
    optionDraweViewInitial:{
      borderRadius: 15, 
      borderWidth: 2, 
      marginLeft: '2%', 
      borderColor: '#ddd', 
      padding: 5, 
      justifyContent: 'center', 
      maxWidth: '90%', 
      marginRight: '20%'
    },profileView:{
      flexDirection: 'row', 
      alignItems: 'center', 
      marginBottom: 10
    },profileTextField:{
      flex: 1, 
      fontSize: 16, 
      fontWeight: 'bold' 
    },profileButtonHome:{
      width: 30, 
      height: 30, 
      marginLeft: '10%', 
      marginTop: '30%'
    },searchOfferViewContainer:{
      width:'100%',
      paddingLeft:'20%',
      paddingRight:'20%', 
      marginBottom:10
    },searchOfferFlatlistContainer:{
      padding: 0, 
      paddingRight: 10, 
      margin: 0, 
      justifyContent: 'center', 
      alignItems: 'center'
    },searchOfferFlatlistTextAccept:{
      marginTop:2,
      marginBottom:5,
      marginLeft:15,
      marginRight:15,
      fontSize: 16, 
      color: 'red', 
      textAlign: 'center',
    },userParchesText:{
      fontWeight: 'bold',
      marginLeft:5,
      marginRight:'auto', 
      paddingTop:15,
      paddingBottom:'auto'
    },  
    offersMapcontainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    offersMapmap: {
      width: "100%",
      height: "100%",
    },
    offersMapmodalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingBottom: 20,
    },offersMapCard:{ width: '95%',
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingBottom: 20,
    },
    hcctTextA:{
      fontSize: 12,
      marginTop: 3,
      marginBottom: 1,
      color: '#8f8f8f',
      
    },
    hcctTextB:{
      flexDirection: 'row', position:'relative' 
    },
    hcctTextBTitle:{
      fontWeight: 'bold' 
    },
    hcctTextBScore:{
      position:'absolute',
      //  left:'80%',
      right:0,
       marginRight:4,
       marginTop:'auto',
       marginBottom:'auto',
      
    },
    homeCardContentDesc:{
      flexDirection: 'row'
    },
    hccdColumnContainer:{
      flexDirection: 'column',
      // marginTop: -10,
      // marginRight: 10,
      // paddingRight: 10,
       width: '50%',
       position:'relative'
    },
    hccdColumn:{
      flexDirection: 'row',
      alignItems: 'center',
       marginRight: 10,
       marginTop:5,
       marginBottom:2
    },
    cardCategory:{
      
    },
    cardLocation:{

    },
    cardTime:{
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#fe4442',
      borderRadius: 6,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'row',
      marginRight: 'auto',
      marginBottom: 'auto',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 2 
    },
  cell: {
    backgroundColor:'#f4f4f4',
    paddingTop:'2%',
    paddingBottom:'auto',
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 25,
    fontWeight:'bold',
    textAlign:'center',
    borderRadius:15,
    marginLeft:10,
    marginRight:10,
    marginTop:20,
    marginBottom:20
  },offerStatusViewcase:{
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 20 
  },offerStatusTextCongrats:{
    fontSize: 15, 
    fontWeight: 'bold',
    textAlign:'auto',
    color:'#3cde82',
    marginBottom:10,
    marginTop:20
  },offerStatusTexName:{
    fontSize: 20, 
    textAlign: 'center', 
    fontWeight: 'bold', 
    marginBottom: 10
  },offerStatusTextRedeem:{
    fontSize: 16, 
    textAlign: 'left', 
    fontWeight: 'bold', 
    marginBottom: 10
  },offerStatusDivider:{
    backgroundColor: 'black', 
    height: 1, 
    marginBottom: 5, 
    marginTop: 10,
    marginLeft:25, 
    marginRight:25
  },
  offerStatusViewFinal:{
    width: '100%', 
    alignItems: 'center', 
    marginTop:50,
    marginBottom:50
  },offerStatusTextFinal:{
    textDecorationLine: 'underline', 
    color: '#000',
    fontSize: 15, 
    fontWeight: 'bold' 
  },paymentScrollView:{
    alignContent: 'center',
    alignContent: 'center', 
    marginLeft: 'auto', 
    marginRight: 'auto',
    paddingBottom:10
  },paymentPressableView:{
    marginBottom: 0,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },paymentImage:{
    width: 50, 
    height: 50, 
    marginTop: 2, 
    marginLeft: 10, 
    marginRight: 10, 
    marginBottom: 2
  },paymentViewFinal:{
    paddingLeft:30,
    paddingRight:30,
    // marginTop:10, 
    position:'absolute',
    height:60, 
    width:'100%', 
    bottom:0
  },paymentCarViewText:{
    marginTop:30,
    marginRight:'auto',
    marginLeft:'auto', 
    fontWeight:'bold', 
    fontSize:20
  },paymentCarSurface:{
    marginBottom:10,
    marginLeft:'auto', 
    marginRight:'auto', 
    borderRadius:50,
    padding:10
  },paymentCarSurfaceText:{
    marginLeft:'auto', 
    marginRight:'auto',
    fontSize:20,
    textAlign:'center', 
    fontWeight:'bold',
    paddingLeft:10,
    paddingRight:10
  },paymentCarEmptyCar:{
    fontWeight:'bold',
    textDecorationLine:'underline',
    color:'#f22c3d'
  },paymentCarViewSubtotal:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 10
  }, 
  paymentConfirmBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paymentConfirmImageHome: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  paymentConfirmAuthTextPrimary: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  paymentConfirmAuthForm: {
    padding: 20,
  },
  paymentConfirmOfferTitle: {
    fontSize: 20,
    color: '#212121',
    marginVertical: 10,
  },
  paymentConfirmSeparator: {
    marginVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  paymentConfirmTextSeparator: {
    fontSize: 16,
    color: '#212121',
  },
  paymentConfirmPrimaryButton: {
    backgroundColor: '#ff5d42',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  paymentConfirmTextPrimary: {
    color: '#fff',
    fontSize: 16,
  },paymentDetailsPaperSelectText:{
    backgroundColor: 'transparent', 
    borderRadius: 100,
    height: 30, 
    borderBottomColor: 'red', 
    paddingBottom: 5
  },paymentDetailsPaperSelectContainer:{
    backgroundColor: 'transparent', 
    borderRadius: 100, 
    marginTop: 3, 
    marginLeft: 10, 
    width: '95%', 
    height: 25
  },paymentDetailsTextInput:{
    width: '100%', 
    height: 42, 
    marginTop: 5, 
    marginLeft: '5%', 
    marginRight: '5%', 
    marginBottom: 15, 
    backgroundColor: '#FFFFFF', 
    color: '#000000'
  },paymentDetailsViewFinal:{
    padding: 10, 
    borderTopWidth: 1, 
    borderColor: '#ddd',
    marginTop:'auto'
  },paymentDetailsViewF:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 10
  },statusParcheViewText:{
    marginTop: 30, 
    marginRight: 'auto', 
    marginLeft: 'auto', 
    fontWeight: 'bold', 
    fontSize: 20 
  },statusParcheViewToucheble:{
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    borderBottomColor:'#ddddd5', 
    borderBottomWidth:1, 
    marginLeft:'10%',
    marginRight:'10%'
  },statusParcheTouchebleStyle:{
    flex: 1, 
    padding: 10, 
    backgroundColor: '#fff', 
    alignItems: 'flex-start', 
    borderRadius: 5, 
    paddingLeft:25, 
    marginRight:'10%'
  },statusParcheTextColorValidatorActive:{
    fontWeight:'bold',
    size:10 
  },statusParcheTextColorValidatorRedeemed:{
    fontWeight:'bold',
    size:10
  },



})


export const pickerStyle = {
	// inputIOS: {
	// 	// color: 'black',
	// 	paddingTop: 13,
	// 	paddingHorizontal: 10,
	// 	paddingBottom: 12,
  //   marginRight:500,
  //   width:'100%',
  //   fontSize:20
	// },
	// inputAndroid: {
	// 	color: 'black',
  //   // backgroundColor:'black',
  //   width:'100%',
  //   // height:
  //   fontSize:20

	// },
	// underline: { borderTopWidth: 0 },
	// icon: {
	// 	position: 'absolute',
	// 	backgroundColor: 'transparent',
	// 	borderTopWidth: 5,
	// 	borderTopColor: '#00000099',
	// 	borderRightWidth: 5,
	// 	borderRightColor: 'transparent',
	// 	borderLeftWidth: 5,
	// 	borderLeftColor: 'transparent',
	// 	// width: 0,
	// 	// height: 0,
	// 	// top: 20,
	// 	// right: 15,
	// },
};

export const pickerCategory= {
//   inputAndroid: {
//   // with:10,
//   // flex: 1,
//   alignItems: 'stretch',
//     backgroundColor: Variables.secondary,
//   marginLeft: 5,
//   marginRight: 5,
//   paddingLeft: 10,
//   paddingRight: 10,
//   // borderColor:Variables.background,
//   paddingTop:10,
//   paddingBottom:7,
//   borderWidth: 2,
//   borderRadius: 20,
//   color: Variables.primary,
//   borderColor: Variables.background
// },

// placeholderColor: 'black',
}