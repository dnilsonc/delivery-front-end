import React, { useState } from "react";

import {
    Text,
    Image,
    View,
    Alert,
} from 'react-native'

import { style } from "./styles"
import Logo from "../../assets/logo.png"
import {MaterialIcons, Octicons} from "@expo/vector-icons"
import { themes } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native"
import { authServices } from "../../services/auth";

export default function Login () {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false)

    async function getLogin(){
        try {
            setLoading(true)

            // if(!email || !password){
            //     setLoading(false)
            //     return Alert.alert('Ateção', 'Preencha todos os campos!')
            // }

            
            try {
                console.log('token')
                const response = await fetch('http://192.168.56.1:3333/sessions/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',  // Especifica que o corpo é JSON
                    },
                    body: JSON.stringify({
                        "email": "teste@gmail.com", 
                        "password": "12345678"
                    }),
                });
                const data = await response.json();
                console.log(data)
                navigation.reset({routes:[{name:"BottomRoutes"}]})
                
            } catch (error:any) {
                console.log(error)
            }


            // setTimeout(() => {
            //     if (email == 'a' && password == 'a')
            //         Alert.alert('Logado com suscesso')
            //     else
            //     Alert.alert('Ateção', 'Usuário não encontrado!')
            //     setLoading(false)
            // }, 2000)

            
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source = {Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <Input
                value={email}
                onChangeText={setEmail}
                title="ENDEREÇO DE EMAIL"
                IconRigth={MaterialIcons}
                iconRigthName="email"
            />

            <Input
                value={password}
                onChangeText={setPassword}
                title="SENHA"
                IconRigth={Octicons}
                iconRigthName={showPassword?"eye-closed":"eye"}
                secureTextEntry={showPassword}
                onIconRigthPress={() => setShowPassword(!showPassword)}
            />
        
            <Button text="ENTRAR" loading={loading} onPress={() => getLogin()}/>

            <Text style={style.textBottom}>Não tem conta? <Text style={{color: themes.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}