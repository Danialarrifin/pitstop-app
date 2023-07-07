import { Button, View, Text, TextInput, Image, SafeAreaView, FlatList } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import axiosInstance from '../utils/axios';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';





function Vehicle({ navigation }) {
    const [vehicle, setVehicle] = useState([]);
    const { userInfo } = useContext(AuthContext);

    useEffect(() => {
        getVehicle();
    }, []);

    const getVehicle = async () => {
        try {
            const response = await axiosInstance.get(
                `/vehicles?userId=${userInfo.user.id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${userInfo?.access_token}`
                    }
                }
            );
            console.log('response vehicle', response.data);
            if (response.data.length > 0)
                setVehicle(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
                    <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 145, color: 'white' }}> Vehicles</Text>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator
                data={vehicle}
                renderItem={({ item }) => (
                    <>
                        <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 10, paddingVertical: 30, marginHorizontal: 40, marginVertical: 10, elevation: 10, justifyContent: 'center', width: '80%' }}>
                            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Roboto-BoldItalic' }}>{item.manufacturer}</Text>
                            <Text style={{ color: 'white' }}>{item.model}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: "white", width: '30%', marginHorizontal: 5, borderRadius: 4, alignItems: 'center', justifyContent: 'center', elevation: 20, marginBottom: 10, }}>
                                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                                    <Text style={{ color: 'firebrick', marginRight: 5 }}><AntDesgin name='car' style={{ color: 'firebrick', fontSize: 20 }} /></Text>
                                    <Text style={{ color: 'firebrick' }}>{item.plate_num}</Text>
                                </View>
                            </View>
                        </View>
                    </>
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default Vehicle;