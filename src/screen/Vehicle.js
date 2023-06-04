import { Button, View, Text, TextInput, Image } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
function Vehicle({ navigation }) {
    return (
        <>
            <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
                    <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 115, color: 'white' }}> View My Vehicle</Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', alignItems: 'center', borderRadius: 50, height: '25%', marginLeft: 40, marginRight: 40, marginBottom: 10, marginTop: 50, elevation: 10, justifyContent: 'center' }}>
                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Image source={require('../assets/icons/logo.png')} style={{ width: '200%', height: '200%'}}/>
        </View>    */}
                <View style={{ width: '30%', backgroundColor: 'white', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'firebrick' }}>Suzuki Swift</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: "white", width: '30%', marginHorizontal: 5, borderRadius: 4, alignItems: 'center', justifyContent: 'center', elevation: 20, marginBottom: 10, }}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                        <Text style={{ color: 'firebrick', marginRight: 5 }}><AntDesgin name='car' style={{ color: 'firebrick', fontSize: 20 }} /></Text>
                        <Text style={{ color: 'firebrick' }}>WWF1738</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', alignItems: 'center', borderRadius: 50, height: '25%', marginLeft: 40, marginRight: 40, marginBottom: 10, elevation: 10, justifyContent: 'center', marginTop: 10 }}>
                <View style={{ width: '30%', backgroundColor: 'white', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'firebrick' }}>Perodua Myvi</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: "white", width: '30%', marginHorizontal: 5, borderRadius: 4, alignItems: 'center', justifyContent: 'center', elevation: 20, marginBottom: 10, }}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                        <Text style={{ color: 'firebrick', marginRight: 5 }}><AntDesgin name='car' style={{ color: 'firebrick', fontSize: 20 }} /></Text>
                        <Text style={{ color: 'firebrick' }}>VHL9808</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '80%', height: '60%', }}>
                    <Button
                        color={'#b22222'}
                        title="Update Vehicle"
                        onPress={() => navigation.navigate(PATH_HOME.addvehicle)}
                    />
                </View>
            </View>
        </>
    );
}

export default Vehicle;
