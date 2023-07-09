import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, View, Text, SafeAreaView, FlatList } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import axiosInstance from '../utils/axios';


function History({ navigation }) {
  const [transaction, setTransaction] = useState([]);
  const { login, userInfo } = useContext(AuthContext);

  useEffect(() => {
    getAllTransaction();
  }, []);

  const getAllTransaction = async () => {
    try {
      const response = await axiosInstance.get(
        "/transactions",
        {
          headers: {
            'Authorization': `Bearer ${userInfo?.access_token}`
          }
        }
      );
      console.log('response transaction', response.data);
      if (response.data.length > 0)
        setTransaction(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
          <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 100, color: 'white' }}> Transaction History</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator
        data={transaction}
        renderItem={({ item }) => (
          <>
            <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 10, paddingVertical: 30, marginHorizontal: 40, marginVertical: 10, elevation: 10, justifyContent: 'center', width: '80%' }}>
              <Text style={{ color: 'white', fontSize: 25, fontFamily: 'Roboto-BoldItalic' }}>Pohleh Sdn Bhd</Text>
              {/* <Text style={{ color: 'white', fontFamily: 'Roboto-BoldItalic' }}>{item.appointment_id}</Text> */}
              <Text style={{ color: 'white', fontSize: 20, }}>{item.remarks}</Text>
              <Text style={{ color: 'white' }}>{item.final_price}</Text>
            </View>
          </>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

export default History;
