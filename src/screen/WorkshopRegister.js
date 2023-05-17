import { Button, View, Text, TextInput } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
function WorkshopRegister({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '80%', height: '60%' }}>
                <Text style={{color:'firebrick'}}>Name</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor:'white', borderRadius: 4  }} />

                <Text style={{color:'firebrick'}}>Phone Number</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor:'white', borderRadius: 4  }} />

                <Text style={{color:'firebrick'}}>Email address</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor:'white', borderRadius: 4  }} />

                <Text style={{color:'firebrick'}}> Address</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor:'white', borderRadius: 4  }} />

                <Text style={{color:'firebrick'}}>Password</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor:'white', borderRadius: 4  }} />

                <Button
                    color={'#b22222'}
                    title="Sign Me Up"
                    onPress={() => navigation.navigate(PATH_HOME.myworkshop)}
                />
            </View>
        </View>
    );
}

export default WorkshopRegister;
