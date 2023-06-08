import { Button, View, Text, TextInput, ScrollView } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
function WorkshopRegister({ navigation }) {
    return (
        <ScrollView >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}>Name</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}>Phone Number</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}>Email Address</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}> Address</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}> State</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}> Postcode</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}> City</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}> Password</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                </View>
                <Button
                    color={'#b22222'}
                    title="Sign Me Up"
                    onPress={() => navigation.navigate(PATH_HOME.myworkshop)}
                />
            </View>
        </ScrollView>
    );
}

export default WorkshopRegister;
