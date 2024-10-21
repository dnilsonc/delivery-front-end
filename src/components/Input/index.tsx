import React, { forwardRef, LegacyRef } from "react";

import { style } from "./styles"
import { themes } from "../../global/themes";
import { MaterialIcons, FontAwesome, Octicons } from "@expo/vector-icons";
import { View, Text, TextInput, TextInputProps, TouchableOpacity, StyleProp, TextStyle } from "react-native";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;


type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    iconLeftName?: string,
    iconRigthName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRigthPress?: () => void,
    height?:number,
    labelStyle?:StyleProp<TextStyle>
}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {

    const {IconLeft, IconRigth, iconLeftName, iconRigthName, title, onIconLeftPress, onIconRigthPress, labelStyle, height, ...rest} = Props

    const calculateSizeWidth = () => {
        if (IconLeft && IconRigth){
            return '80%'
        } else if (IconLeft || IconRigth){
            return '90%'
        } else{
            return '100%'
        }
    }

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRigth){
            return 10
        } else if (IconLeft || IconRigth){
            return 10
        } else{
            return 20
        }
    }

    return (
        <>
        {title&&<Text style={[style.titleInput, labelStyle]}>{title}</Text>}
        <View style={[style.BoxInput, {paddingLeft:calculateSizePaddingLeft(),height:height || 40, padding:5}]}>
            {IconLeft && iconLeftName &&(
                <TouchableOpacity onPress={onIconLeftPress} style = {style.button} >
                    <IconLeft name={iconLeftName as any} size={20} color={themes.colors.gray} style={style.Icon} />
                </TouchableOpacity>
            )}
            <TextInput 
                style={[style.input, {width: calculateSizeWidth(), height:'100%'}]}
                {...rest}
            />
            {IconRigth && iconRigthName &&(
                <TouchableOpacity onPress={onIconRigthPress}>
                    <IconRigth name={iconRigthName as any} size={20} color={themes.colors.gray} style={style.Icon} />
                </TouchableOpacity>
            )}
        </View>
        </>
    )
}) 