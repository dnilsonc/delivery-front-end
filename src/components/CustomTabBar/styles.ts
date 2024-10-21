


import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    tabArea: {
        flexDirection:'row',
        height:80,
        justifyContent:'space-around',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    tabItem: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabItemButtom: {
        width:70,
        height:70,
        borderRadius:35,
        alignItems:'center',
        justifyContent:'center',
        zIndex:9999,
        top:-30,
        backgroundColor:themes.colors.primary
    },
})