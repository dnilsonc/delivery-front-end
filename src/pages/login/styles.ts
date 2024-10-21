


import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container:  {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    boxTop: {
        height:Dimensions.get('window').height/3,
        width:'100%',
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
    },
    boxMind: {
        height:Dimensions.get('window').height/4,
        width:'100%',
        // backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:37
    },
    boxBottom: {
        height:Dimensions.get('window').height/3,
        width:'100%',
        // backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
    },
    logo: {
        width:80,
        height:80,
    },
    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize: 18,
    },
    titleInput: {
        marginLeft:5,
        color:themes.colors.gray,
        marginTop:20,
    },
    BoxInput:{
        width:'100%',
        height:'20%',
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themes.colors.ligthGray,
        borderColor:themes.colors.ligthGray,
    },
    input: {
        height:'100%',
        width:'90%',
        // backgroundColor:'red',
        borderRadius:40,
        paddingLeft:5,
    },
    button:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:themes.colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    textButton: {
        fontSize:16,
        color:'white',
        fontWeight:'bold'
    },
    textBottom:{
        fontSize:16,
        color:themes.colors.gray
    },

})