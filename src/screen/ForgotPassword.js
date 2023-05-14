import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';

function ForgotPassword({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        
            <Text style={{color: 'firebrick', fontSize: 30, fontFamily: 'Roboto-Bold'}}>Forgot Password?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: 10 }}>
                    <Text>Remember your password? Login </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(PATH_AUTH.login)}><Text>HERE</Text></TouchableOpacity>
                </View>
            <View style={{ width: '80%', height: '60%', }}>
                <Text style={{ color: 'firebrick', marginTop: 50}}>Email address</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 10, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                <Button
                    color={'#b22222'}
                    title="RESET PASSWORD"
                    onPress={() => navigation.navigate(PATH_AUTH.resetpassword)}
                />
            </View>
        </View>
    );
}

export default ForgotPassword;
