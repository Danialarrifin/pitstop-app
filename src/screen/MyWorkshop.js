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
            `/workshops?workshopId=41`,
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
            {/* <View style={{ backgroundColor: 'firebrick', alignItems: 'center', justifyContent: 'center', borderBottomEndRadius: 4, height: '25%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <Text style={{ marginTop: 30, color: 'white', fontSize: 30, fontFamily: 'Roboto-Bold' }} onPress={() => navigation.navigate(PATH_HOME.vehicle)}>IMAGE</Text>
                </View>
            </View> */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto-Light' }}>{workshop?.name}</Text>
                <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto-Light' }}>{workshop?.contact_num}</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Text>
                    <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
                    <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
                    <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
                    <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
                </Text>
                <Text>(4/5)</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                <View style={{ backgroundColor: "white", flex: 1, height: 80, marginHorizontal: 5, borderRadius: 4, elevation: 20 }}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                        <Text style={{ color: 'black' }}>The Service is top tier! Reccomended!</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: 17 }}>
                            <Text>
                                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                            </Text>
                            <Text style={{ fontSize: 10 }}>(4/5)</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', marginLeft: 60 }}>
                            <Text>Mirza</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: "white", flex: 1, height: 80, marginHorizontal: 5, borderRadius: 4, elevation: 20 }}>
                    <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                        <Text style={{ color: 'black' }}>Highly Reccomended! Good service and workmanship.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: 17 }}>
                            <Text>
                                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                            </Text>
                            <Text style={{ fontSize: 10 }}>(4/5)</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end', marginLeft: 60 }}>
                            <Text>Mirza</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Roboto-Light' }}>Address</Text>
            </View>
            <View style={{ backgroundColor: "white", height: 70, marginHorizontal: 5, borderRadius: 4, elevation: 20, }}>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <Text style={{ color: 'black' }}>2, Jalan Utama 2/11, Seksyen 2, Taman Perindustrian Puchong Utama, 47100 Puchong, Selangor</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "white", height: 100, marginHorizontal: 5, borderRadius: 4, elevation: 20, marginTop: 15 }}>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <Text style={{ color: 'black' }}>Workshop  Accident Repairs & Claim, Aircon Service, Battery Service, Body Repair, Car Polish, Car Wash & Wax, Engine Service, Exhaust Specialist, Maintenance, Mechanical Service, Paint Protection, Seat & Cushion Repair, Spray Painting, Tyre & Rims Service, Welding Service, Window Installation</Text>
                </View>
            </View>
            {/* <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Roboto-Light' }}>Address</Text>
            </View>
            <View style={{ backgroundColor: "white", height: 70, marginHorizontal: 5, borderRadius: 4, elevation: 20, }}>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                    <Text style={{ color: 'black' }}>2, Jalan Utama 2/11, Seksyen 2, Taman Perindustrian Puchong Utama, 47100 Puchong, Selangor</Text>
                </View>
            </View> */}
            {/* <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                <View style={{ width: '80%', height: '60%', }}>
                    <Button
                        color={'#b22222'}
                        title="View Appointments"
                        onPress={() => navigation.navigate(PATH_HOME.viewappointment)}
                        style={{marginBottom: 10}}
                    />
                    <Button
                        color={'#b22222'}
                        title="View Vehicles"
                        onPress={() => navigation.navigate(PATH_HOME.viewvehicle)}
                    />
                </View>
            </View> */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: 20
                }}
            >
                <View style={{ width: '80%' }}>
                    <Text style={{}}>FAQs</Text>
                </View>

                <View style={{ width: '80%', height: '30%', backgroundColor: 'red', margin: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gainsboro', }}>
                    <Text>What is PITSTOP?</Text>
                </View>

                <View style={{ width: '80%', height: '30%', backgroundColor: 'red', margin: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text>Does PITSTOP charge a membership fee?</Text>
                </View>

                <View style={{ width: '80%', height: '30%', backgroundColor: 'red', margin: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                    <Text>What are pitstop speciality?</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 40, justifyContent: 'center' }}>
                <View style={{ width: '80%', height: '60%' }}>
                    <Button
                        color={'#b22222'}
                        title="View Appointments"
                        onPress={() => navigation.navigate(PATH_HOME.viewappointment)}
                    />
                </View>
                <View style={{ width: '80%', height: '60%' }}>
                    <Button
                        color={'#b22222'}
                        title="View Vehicles"
                        onPress={() => navigation.navigate(PATH_HOME.viewvehicle)}
                    />
                </View>
            </View>
            {/* <View style={{ flex: 1, alignItems: 'center',  backgroundColor: 'yellow', justifyContent: 'center', height: '60%' }}>
                <View style={{ width: '80%', height: '60%'}}>
                    <Button
                        color={'#b22222'}
                        title="View Vehicles"
                        onPress={() => navigation.navigate(PATH_HOME.viewvehicle)}
                    />
                </View>
            </View> */}
        </>
    );
}

export default MyWorkshop;
