import { Button, View, Text, TextInput, Image, SafeAreaView, FlatList } from 'react-native';
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
    // <ScrollView>
    //   <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '20%' }} >
    //     <View style={{ flexDirection: 'row', marginVertical: 5 }}>
    //       <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
    //       <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 140, color: 'white' }}> Workshops</Text>
    //     </View>
    //   </View>
    //   <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
    //     {workshop.length > 0 ?
    //       workshop.map((item) => {
    //         return (
    //           // <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 50, marginHorizontal: 40, marginVertical: 10, elevation: 10, justifyContent: 'center', height: '20%', width: '80%' }}>
    //           //   <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 30, elevation: 10, width: '100%', height: '100%' }}>
    //           //     <Text style={{ color: 'black' }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop)}>{item.name}</Text>
    //           //   </View>
    //           // </View>
    //           <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 50, marginHorizontal: 40, marginVertical: 10, elevation: 10, justifyContent: 'center', height: '20%', width: '80%' }}>
    //             <Text style={{ color: 'black' }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop, { workshopId: item?.id })}>{item.name}</Text>
    //           </View>
    //         )
    //       }) : null}

    //   </View>
    // </ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
          <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 140, color: 'white' }}> Workshops</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator
        data={workshop}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 50, paddingVertical: 30, marginHorizontal: 40, marginVertical: 10, elevation: 10, justifyContent: 'center', width: '80%' }}>
            <Text style={{ color: 'black' }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop, { workshopId: item?.id })}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default Workshop;
