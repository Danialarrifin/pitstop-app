import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
function Register({ navigation }) {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { register } = useContext(AuthContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '80%', height: '60%' }}>
                <Text style={{ color: 'firebrick' }}>Name</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', color:'black', borderRadius: 4 }} value={name}
                    onChangeText={text => setName(text)} />

                <Text style={{ color: 'firebrick' }}>Email address</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', color:'black',  borderRadius: 4 }} value={email}
                    onChangeText={text => setEmail(text)} />

                <Text style={{ color: 'firebrick' }}>Password</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', color:'black',  borderRadius: 4 }} value={password}
                    onChangeText={text => setPassword(text)} secureTextEntry />

                <Button
                    color={'#b22222'}
                    title="Sign Me Up"
                    onPress={() => {
                        register({
                            name,
                            email,
                            password
                        });
                    }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: 10 }}>
                    <Text style={{color:'black'}}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(PATH_AUTH.login)}><Text style={{color:'black'}}>Login Here</Text></TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default Register;
