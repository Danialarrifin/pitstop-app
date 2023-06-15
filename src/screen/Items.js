import { Button, View, Text, TextInput, Image, SafeAreaView, FlatList } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import axiosInstance from '../utils/axios';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';



function Items({ navigation }) {
  const [service, setService] = useState([]);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    getAllService();
  }, []);

  const getAllService = async () => {
    try {
      const response = await axiosInstance.get(
        "/services",
        {
          headers: {
            'Authorization': `Bearer ${userInfo?.access_token}`
          }
        }
      );
      console.log('response service', response.data);
      if (response.data.length > 0)
        setService(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop)} />
          <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 140, color: 'white' }}> Services</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator
        data={service}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', alignItems: 'center', borderRadius: 50, paddingVertical: 30, marginHorizontal: 40, marginVertical: 10, elevation: 10, justifyContent: 'center', width: '80%' }}>
            <Text style={{ color: 'firebrick' }}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Items;
