import { Button, View, Text, TextInput, Image, ScrollView } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import axiosInstance from '../utils/axios';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';




function Workshop({ navigation }) {
  const [workshop, setWorkshop] = useState([]);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    getAllWorkshop();
  }, []);

  const getAllWorkshop = async () => {
    try {
      const response = await axiosInstance.get(
        "/workshops",
        {
          headers: {
            'Authorization': `Bearer ${userInfo?.access_token}`
          }
        }
      );
      console.log('response workshop', response.data);
      if (response.data.length > 0)
        setWorkshop(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
          <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 140, color: 'white' }}> Workshops</Text>
        </View>
      </View>
      {workshop.length > 0 ?
        workshop.map((item) => {
          return (
                <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 50, height: '18%', marginLeft: 40, marginRight: 40, marginBottom: 10, marginTop: 10, elevation: 10, justifyContent: 'center' }}>
                  <View style={{ width: '50%', backgroundColor: 'white', height: '20%', justifyContent: 'center', alignItems: 'center', borderRadius: 30, elevation: 10, }}>
                    <Text style={{ color: 'black' }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop)}>{item.name}</Text>
                  </View>
                </View>
          )
        }) : null}
    </>
  );
}

export default Workshop;
