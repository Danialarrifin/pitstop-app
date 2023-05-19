import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'



function CompletedAppointment({ navigation }) {
    return (
        <>
            <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.viewappointment)} />
                    <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 100, color: 'white' }}> Completed Appointments</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 20, marginBottom: 10, color: 'firebrick', fontFamily: 'Roboto-Bold' }} onPress={() => navigation.navigate(PATH_HOME.dashboard)}> View Appointments</Text>
            </View>

            <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 30, height: '35%', marginLeft: 30, marginBottom: 10, elevation: 10, justifyContent: 'center', width: '85%' }}>
                <Text style={{ fontSize: 20, marginBottom: 5, color: 'white' }}>Serv Malaysia</Text>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='calendar' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>4/11/2022</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <AntDesgin name='clockcircleo' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>11.00 am - 12.30 pm</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <AntDesgin name='car' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>Engine Overhaul</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>Status:</Text>
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20, fontFamily: 'Roboto-BoldItalic' }}>Completed</Text>
                </View>

            </View>
            <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 30, height: '35%', marginLeft: 30, elevation: 10, justifyContent: 'center', width: '85%' }}>
                <Text style={{ fontSize: 20, marginBottom: 5, color: 'white' }}>Pomen</Text>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='calendar' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>7/11/2022</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <AntDesgin name='clockcircleo' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>1.00 pm - 3.00 pm</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <AntDesgin name='car' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>Services, Brake Pad</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>Status:</Text>
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20, fontFamily: 'Roboto-BoldItalic' }}>Completed</Text>
                </View>

            </View>
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '80%', height: '60%', }}>
                    <Button
                        color={'#b22222'}
                        title="Completed Appointments"
                    onPress={() => navigation.navigate(PATH_HOME.completedappointment)}
                    />
                </View>
            </View> */}
        </>
    );
}

export default CompletedAppointment;
