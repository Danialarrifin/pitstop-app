import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';

function ResetPassword({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{color: 'firebrick', fontSize: 30, fontFamily: 'Roboto-Bold', marginBottom: 10}}>Reset Your Password</Text>
            <View style={{ width: '80%', height: '60%', marginTop: 30}}>
                <Text style={{ color: 'firebrick' }}>New Password</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                <Text style={{ color: 'firebrick' }}>Confirm New Password</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                <Button
                    color={'#b22222'}
                    title="Reset Password"
                    onPress={() => navigation.navigate(PATH_AUTH.login)}
                />
            </View>
        </View>
    );
}

export default ResetPassword;
