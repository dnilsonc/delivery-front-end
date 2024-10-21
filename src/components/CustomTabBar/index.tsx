import React, { useContext } from "react";
import { Text, Touchable, View } from "react-native";
import { style } from "./styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"; // Tipagem correta para tabs
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { themes } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";

// Nomeando o componente para facilitar a depuração e legibilidade
const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {

    const {onOpen} = useContext<any>(AuthContextList)

    const go = (ScreenName:string) => {
        navigation.navigate(ScreenName)
    }

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
                <AntDesign 
                    name="bars"
                    style={{opacity:state.index ===0?1:0.3, color:themes.colors.primary,fontSize:32}}
                />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItemButtom} onPress={() => onOpen()}>
                <View style={{width:'100%', left:10, top:4}}>
                    <Entypo
                        name="plus"
                        size={40}
                        color={'#FFF'}
                    />
                </View>
                <View style={{flexDirection:'row-reverse', width:'100%', right:10, bottom:10}}>
                    <MaterialIcons 
                        name="edit"
                        size={30}
                        color={'#FFF'}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
                <FontAwesome 
                        name="user"
                        style={{opacity:state.index ===1?1:0.3, color:themes.colors.primary,fontSize:32}}
                    />
            </TouchableOpacity>
        </View>
    );
};

export default CustomTabBar;
