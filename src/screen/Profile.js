import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import React, { useContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';
import { AuthContext } from '../context/AuthContext';

function Profile({ navigation, route }) {
  const [profile, setProfile] = useState([]);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await axiosInstance.get(
        `/auth/getProfile?userId`,
        {
          headers: {
            'Authorization': `Bearer ${userInfo?.access_token}`
          }
        }
      );
      console.log('response profile', response.data);
      if (response.data)
        setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
          <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 140, color: 'white' }}> My Profile</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: '20%', backgroundColor: 'firebrick', borderRadius: 70, margin: 10 }}>
        <Text>
          <AntDesgin name='user' style={{ color: 'white', fontSize: 100 }} />
        </Text>
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{ marginTop: 10, color: 'firebrick', fontSize: 30, fontFamily: 'Roboto-Bold', marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.vehicle)}>Profile</Text>
      </View>
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, width: '100%' }} />
      <View style={{ justifyContent: 'flex-start', margin: 20 }}>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <Text style={{ color: 'white', marginRight: 80 }}><AntDesgin name='user' style={{ color: 'firebrick', fontSize: 30 }} /></Text>
          <Text style={{ color: 'firebrick', fontSize: 20, fontFamily: 'Roboto-Bold' }}>{profile?.name}</Text>
        </View>
      </View>
      {/* <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, width: '100%' }} /> */}
      {/* <View style={{  justifyContent: 'flex-start', margin: 20 }}>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <Text style={{ color: 'white', marginRight: 80 }}><AntDesgin name='phone' style={{ color: 'firebrick', fontSize:30 }} /></Text>
          <Text style={{ color: 'firebrick', fontSize:20 }}>01932765472</Text>
        </View>
      </View> */}
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, width: '100%' }} />
      <View style={{ justifyContent: 'flex-start', margin: 20 }}>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <Text style={{ color: 'white', marginRight: 80, }}><AntDesgin name='mail' style={{ color: 'firebrick', fontSize: 30 }} /></Text>
          <Text style={{ color: 'firebrick', fontSize: 20, fontFamily: 'Roboto-Bold' }}>{profile?.email}</Text>
        </View>
      </View>
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, width: '100%' }} />
      <View style={{ justifyContent: 'flex-start', margin: 20 }}>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <Text style={{ color: 'white', marginRight: 80 }}><AntDesgin name='car' style={{ color: 'firebrick', fontSize: 30 }} /></Text>
          <Text style={{ color: 'firebrick', fontSize: 20, fontFamily: 'Roboto-Bold' }} onPress={() => navigation.navigate(PATH_HOME.vehicle)}> My Vehicle</Text>
        </View>
      </View>
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, width: '100%' }} />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '80%', height: '60%', }}>
          <Button
            color={'#b22222'}
            title="Update Profile"
          />
        </View>
      </View>
    </>

  );
}

export default Profile;
