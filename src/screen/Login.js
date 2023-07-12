import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';

function Login({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { login, userInfo } = useContext(AuthContext);

    const handleLogin = async () => {
        let res = await login(email, password);
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ width: '80%', height: '60%', }}>

                <Text style={{ color: 'firebrick' }} >Username</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4, color: '#000000' }} value={email} onChangeText={text => setEmail(text)} />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate(PATH_AUTH.forgotpassword)}><Text style={{color:'black'}}>Forgot your password?</Text></TouchableOpacity>
                </View>
                <Text style={{ color: 'firebrick' }}>Password</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4, color: '#000000' }}  value={password}   onChangeText={text => setPassword(text)}
          secureTextEntry/>
                <Button
                    color={'#b22222'}
                    title="Login"
                    onPress={() => {
                        handleLogin()
                      }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: 10, color: 'black' }}>
                    <Text style={{ color: 'black'}}>New User? </Text>
                    <TouchableOpacity style={{ color: 'black' }} onPress={() => navigation.navigate(PATH_AUTH.register)}><Text style={{color:'black'}}>REGISTER</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;
