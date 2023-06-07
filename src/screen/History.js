import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axios';


function History({ navigation }) {
const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    getAllTransaction();
  });

  const getAllTransaction = async () => {
    try {
      const response = await axiosInstance.get(
        "/transactions",
        {
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbjNAdGVzdC5jb20iLCJpYXQiOjE2ODYxMTk0NjUsImV4cCI6MTY4NjIwNTg2NX0.OLaKGGIy0M9uOiYq3m2aO3-cB0FR7h4TqqLny9biYfU`
          }
        }
      );
      console.log('response vehicle', response.data);
      if (response.data.length > 0)
        setTransaction(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
          <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 110, color: 'white' }}> Transaction History </Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <Text style={{ fontSize: 20, marginBottom: 10, color: 'firebrick', fontFamily: 'Roboto-Bold' }}>Transaction History</Text>
      </View>
      {transaction.length > 0 ?
        transaction.map((item) => {
          return (
            <>
              <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 30, height: '30%', marginLeft: 30, marginBottom: 10, elevation: 10, justifyContent: 'center', width: '85%' }}>
                <Text style={{ fontSize: 20, marginBottom: 5, color: 'white' }}>Pohleh Workshop Sdn Bhd</Text>
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                  <AntDesgin name='calendar' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                  <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>{item.appointment_id}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                  <AntDesgin name='car' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                  <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>{item.remarks}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 5, }}>
                  <AntDesgin name='pay-circle-o1' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
                  <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>{item.final_price}</Text>
                </View>
              </View>
            </>
          )
        }) : null}

    </>
  );
}

export default History;
