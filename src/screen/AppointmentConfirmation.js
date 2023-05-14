import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'

function AppointmentConfirmation({ navigation }) {
    return (
        <>
         <View style={{ backgroundColor: 'firebrick',  borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.appointment)}/>
                    <Text style={{marginTop: 18, fontSize: 15, marginLeft: 100, color: 'white'}}> Booking Confirmation</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 30, height: '70%', marginBottom: 10, elevation: 10, justifyContent: 'center', width: '85%' }}>
                <AntDesgin name='check' style={{ color: 'green', fontSize: 80, marginTop: 20 }} />
                <Text style={{ fontSize: 30, marginBottom: 5, color: 'white', fontFamily:'Roboto-Bold' }}>Booking Successful!</Text>
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white' }}>To view your appointment</Text>
                     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '80%', height: '60%', }}>
                    <Button
                        color={'lightcoral'}
                        title="Click Here"
                    onPress={() => navigation.navigate(PATH_HOME.myappointment)}
                    />
                </View>
            </View>
                </View>
            </View>
        </>
    );
}

export default AppointmentConfirmation;
