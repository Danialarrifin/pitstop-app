import { Button, View, Text } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign';
import axiosInstance from '../utils/axios';
import { AuthContext } from '../context/AuthContext';


function ViewAppointment({ navigation }) {
    const [appointment, setAppointment] = useState([]);
    const { userInfo } = useContext(AuthContext);


    useEffect(() => {
        getAppointment();
    }, []);

    const getAppointment = async () => {
        try {
            const response = await axiosInstance.get(
                `/appointments?workshopId`,
                {
                    headers: {
                        'Authorization': `Bearer ${userInfo?.access_token}`
                    }
                }
            );
            console.log('response appointment', response.data);
            if (response.data.length > 0)
                setAppointment(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    const deleteAppointment = async (appointmentId) => {
        try {
            const response = await axiosInstance.get(
                `/appointments/delete?appointmentId=${appointmentId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${userInfo?.access_token}`
                    }
                }
            );
            console.log('response appointment', response.data);
            if (response.data)
                getAppointment();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <View
                style={{
                    backgroundColor: 'firebrick',
                    borderBottomEndRadius: 4,
                    height: '10%',
                }}>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin
                        name="arrowleft"
                        style={{
                            color: 'white',
                            fontSize: 20,
                            marginTop: 20,
                            marginLeft: 10,
                        }}
                        onPress={() => navigation.navigate(PATH_HOME.myworkshop)}
                    />
                    <Text
                        style={{
                            marginTop: 18,
                            fontSize: 15,
                            marginLeft: 110,
                            color: 'white',
                        }}>
                        {' '}
                        View Appointment
                    </Text>
                </View>
            </View>
            <View
                style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Text
                    style={{
                        fontSize: 20,
                        marginBottom: 10,
                        color: 'firebrick',
                        fontFamily: 'Roboto-Bold',
                    }}>
                    Appointments
                </Text>
            </View>

            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            backgroundColor: 'firebrick',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            height: 50,
                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                flex: 1,
                                height: '100%',
                                borderRightWidth: 0,
                            }}>
                            <Text style={{ color: 'white' }}>Name</Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                flex: 1,
                                height: '100%',
                                borderRightWidth: 0,
                            }}>
                            <Text style={{ color: 'white' }}>Date</Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                flex: 1,
                                height: '100%',
                                borderRightWidth: 0,
                            }}>
                            <Text style={{ color: 'white' }}>Time Slot</Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                flex: 1,
                                height: '100%',
                            }}>
                            <Text style={{ color: 'white' }}>Vehicle </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                flex: 1,
                                height: '100%',
                            }}>
                            <Text style={{ color: 'white' }}>Service </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                flex: 1,
                                height: '100%',
                            }}>
                            <Text style={{ color: 'white' }}>Status </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 2,
                                flex: 1,
                                height: '100%',
                            }}>
                            <Text style={{ color: 'white' }}></Text>
                        </View>
                    </View>

                    {appointment.length > 0 ?
                        appointment.map((item) => {
                            return (

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '100%',
                                        height: 40,
                                    }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 2,
                                            flex: 1,
                                            height: '100%',
                                            borderTopWidth: 0,
                                            borderRightWidth: 0,
                                        }}>
                                        <Text>{item.user_name}</Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 2,
                                            flex: 1,
                                            height: '100%',
                                            borderTopWidth: 0,
                                            borderRightWidth: 0,
                                        }}>
                                        <Text>{item.date}</Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 2,
                                            flex: 1,
                                            height: '100%',
                                            borderTopWidth: 0,
                                            borderRightWidth: 0,
                                        }}>
                                        <Text>{item.start_time + '-' + item.end_time}</Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 2,
                                            flex: 1,
                                            height: '100%',
                                            borderTopWidth: 0,
                                            
                                        }}>
                                        <Text style={{fontSize: 10}}>{item.model}</Text>
                                        <Text style={{fontSize: 10}}>{item.plate_num}</Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 2,
                                            flex: 1,
                                            height: '100%',
                                            borderTopWidth: 0,
                                        }}>
                                        <Text>{item.service_name}</Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 2,
                                            flex: 1,
                                            height: '100%',
                                            borderTopWidth: 0,
                                        }}>
                                        <Text>{item.status}</Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 2,
                                            flex: 1,
                                            height: '100%',
                                            borderTopWidth: 0,
                                        }}>
                                        <View style={{ width: '70%', height: '90%' }}>
                                            <Button
                                                color={'#b22222'}
                                                title="Delete"
                                                onPress={() => deleteAppointment(item.id)}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        }) : null}
                </View>
            </View>
        </>
    );
}

export default ViewAppointment;
