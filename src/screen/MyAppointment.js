import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../utils/axios';


function MyAppointment({ navigation, route }) {

    const [appointment, setAppointment] = useState([]);
    const { userInfo } = useContext(AuthContext);

    useEffect(() => {
        getAppointment();
    }, []);

    const getAppointment = async () => {
        try {
           
            const response = await axiosInstance.get(
                `/appointments?userId=${userInfo.user.id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${userInfo?.access_token}`
                    }
                }
            );
            console.log('response appointments', response.data);
            if (response.data)
                setAppointment(response.data[0]);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
        <View style={{ backgroundColor: 'firebrick',  borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
                    <Text style={{marginTop: 18, fontSize: 15, marginLeft: 100, color: 'white'}}> View My Appointments</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginBottom: 10, color: 'firebrick', fontFamily: 'Roboto-Bold' }}  onPress={() => navigation.navigate(PATH_HOME.dashboard)}> My Appointments</Text>
            </View>
            <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 30, height: '30%', marginLeft: 30, marginBottom: 10, elevation: 10, justifyContent: 'center', width: '85%' }}>
                <Text style={{ fontSize: 20, marginBottom: 5, color: 'white' }}>{appointment?.workshop_name}</Text>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='calendar' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>29/11/2022</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <AntDesgin name='clockcircleo' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>11.00 am - 12.30 pm</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <AntDesgin name='car' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>Brake Pad Change and Flat Tyre</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>Status:</Text>
                    <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20, fontFamily: 'Roboto-Bold' }}>Accepted</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '80%', height: '60%', }}>
                    <Button
                        color={'#b22222'}
                        title="Book New Appointment"
                    onPress={() => navigation.navigate(PATH_HOME.appointment)}
                    />
                </View>
            </View>
        </>
    );
}

export default MyAppointment;
