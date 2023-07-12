import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../utils/axios';
import { Button, View, Text, TextInput, Image } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'



function MyWorkshop({ navigation, route }) {
    const [workshop, setWorkshop] = useState([]);
    const { userInfo } = useContext(AuthContext);

    useEffect(() => {
        getWorkshop();
    }, []);

    const getWorkshop = async () => {
        try {
            const response = await axiosInstance.get(
                `/workshops?workshopId=${userInfo?.workshop?.id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${userInfo?.access_token}`
                    }
                }
            );
            console.log('response workshop', response.data);
            if (response.data)
                setWorkshop(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const { logout } = useContext(AuthContext);
    return (
        <>
            <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%', marginBottom: 10 }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='logout' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={logout} />
                    <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 120, color: 'white' }}> My Workshop</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto-Bold' }}>{workshop?.name}</Text>
                <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto-Bold' }}>{workshop?.contact_num}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Text>
                    <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
                    <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
                    <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
                    <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
                </Text>
                <Text style={{color:'black'}}>(4/5)</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Roboto-Light' }}>Address</Text>
            </View>
            <View style={{ backgroundColor: "white", height: 70, marginHorizontal: 5, borderRadius: 4, elevation: 20, }}>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <Text style={{ color: 'black' }}>{workshop?.address_id?.address},</Text>
                    <Text style={{ color: 'black', marginLeft: 5 }}>{workshop?.address_id?.city},</Text>
                    <Text style={{ color: 'black', marginLeft: 5 }}>{workshop?.address_id?.postcode},</Text>
                    <Text style={{ color: 'black', marginLeft: 5 }}>{workshop?.address_id?.state}</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "white", height: 100, marginHorizontal: 5, borderRadius: 4, elevation: 20, marginTop: 15 }}>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <Text style={{ color: 'black' }}>Workshop  Accident Repairs & Claim, Aircon Service, Battery Service, Body Repair, Car Polish, Car Wash & Wax, Engine Service, Exhaust Specialist, Maintenance, Mechanical Service, Paint Protection, Seat & Cushion Repair, Spray Painting, Tyre & Rims Service, Welding Service, Window Installation</Text>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: 20
                }}
            >
                <View style={{ width: '80%' }}>
                    <Text style={{color:'black'}}>FAQs</Text>
                </View>

                <View style={{ width: '80%', height: '30%', backgroundColor: 'red', margin: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gainsboro', }}>
                    <Text style={{color:'black'}}>What is PITSTOP?</Text>
                </View>

                <View style={{ width: '80%', height: '30%', backgroundColor: 'red', margin: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text style={{color:'black'}}>Does PITSTOP charge a membership fee?</Text>
                </View>

                <View style={{ width: '80%', height: '30%', backgroundColor: 'red', margin: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text style={{color:'black'}}>What are pitstop speciality?</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 10, justifyContent: 'center' }}>
                <View style={{ width: '80%', height: '40%' }}>
                    <Button
                        color={'#b22222'}
                        title="View Appointments"
                        onPress={() => navigation.navigate(PATH_HOME.viewappointment)}
                    />
                </View>
                <View style={{ width: '80%'}}>
                    <Button
                        color={'#b22222'}
                        title="View Vehicles"
                        onPress={() => navigation.navigate(PATH_HOME.viewvehicle)}
                    />
                </View>
            </View>
        </>
    );
}

export default MyWorkshop;
