import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ width: '80%', height: '60%', }}>

                <Text style={{ color: 'firebrick' }}>Username</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}> 
                    <TouchableOpacity onPress={() => navigation.navigate(PATH_AUTH.forgotpassword)}><Text>Forgot your password?</Text></TouchableOpacity>
                </View>
                <Text style={{ color: 'firebrick' }}>Password</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                <Button
                    color={'#b22222'}
                    title="Login"
                    onPress={() => navigation.navigate(PATH_HOME.dashboard)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: 10 }}>
                    <Text>New User? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(PATH_AUTH.register)}><Text>REGISTER</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;
