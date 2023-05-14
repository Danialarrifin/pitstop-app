import { Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'


function AddVehicle({ navigation }) {
    return (
        <>
         <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
                    <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 110, color: 'white' }}> Add New Vehicle</Text>
                </View>
            </View>
        <View style={{  alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ width: '80%', height: '60%', }}>
                <Text style={{ color: 'firebrick' }}>Manufacturer</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                <View style={{ flexDirection: 'row', marginVertical: 5, marginBottom: 15}}>
              <Text style={{color: 'firebrick', marginRight: 5  }}><AntDesgin name='car' style={{ color: 'firebrick', fontSize: 20 }} /></Text>
              <Text style={{ color: 'firebrick' }}>Insert Image</Text>
            </View>
                <Text style={{ color: 'firebrick' }}>Model</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                <Text style={{ color: 'firebrick' }}>Plate Number</Text>
                <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} />
                <Button
                    color={'#b22222'}
                    title="Add Vehicle"
                    onPress={() => navigation.navigate(PATH_HOME.dashboard)}
                />
            </View>
        </View>
        </>
    );
}

export default AddVehicle;
