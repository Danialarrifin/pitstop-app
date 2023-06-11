import { Button, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign';
import axiosInstance from '../utils/axios';


function ViewAppointment({ navigation }) {
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        getAllAppointment();
    });

    const getAllAppointment = async () => {
        try {
            const response = await axiosInstance.get(
                "/appointments",
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
                    </View>

                    {appointment.length > 0 ?
                         appointment.map((item) =>
                         { return (

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
                                    <Text>{item.time_slot_id}</Text>
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
                                    <Text>{item.vehicle_id}</Text>
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
                                    <Text>{item.service_id}</Text>
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
                            </View>
                        )}) : null }
                </View>
            </View>
        </>
    );
}

export default ViewAppointment;
