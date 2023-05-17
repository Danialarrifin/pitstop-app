import { Button, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '80%', height: '60%' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 100 }}>
                    <Image source={require('../assets/icons/logo.png')} style={{resizeMode: 'contain', width: '70%'}}/>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'firebrick', fontSize: 30, fontFamily: 'Roboto-Bold' }}>Welcome to</Text>
                    <Text style={{ color: 'firebrick', fontSize: 30, fontFamily: 'Roboto-BoldItalic' }}>PITSTOP</Text>
                </View>
                <View style={{ marginTop: 100 }}>
                    <Button
                        color={'#b22222'}
                        title="Login"
                        onPress={() => navigation.navigate(PATH_AUTH.login)}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Button
                        color={'#b22222'}
                        title="Sign Up"
                        onPress={() => navigation.navigate(PATH_AUTH.register)}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Button
                        color={'#696969'}
                        title="Workshop Registration"
                    onPress={() => navigation.navigate(PATH_AUTH.workshopregister)}
                    />
                </View>
            </View>
        </View>
    );
}

export default Login;
