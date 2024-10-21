


import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
       BoxInput:{
        width:'90%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:themes.colors.ligthGray,
        borderColor:themes.colors.ligthGray,
    },
    input: {
        height:'100%',
        width:'85%',
        // backgroundColor:'red',
        borderRadius:40,
        paddingLeft:5,
    },
    titleInput: {
        marginLeft:5,
        color:themes.colors.gray,
        marginTop:20,
    },
    Icon: {
        width:'100%'
    },
    button:{
        width:'10%'
    },
})