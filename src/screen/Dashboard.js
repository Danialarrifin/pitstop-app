import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
function Dashboard({ navigation }) {
  const {logout} = useContext(AuthContext);
  return (
    <>
      <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderBottomEndRadius: 4, height: '40%' }} >

        <View style={{ flexDirection: 'row' }}>

          <View style={{ flex: 1 }}>
            <Text style={{ color: 'white', marginTop: 5 }} onPress={() => navigation.navigate(PATH_HOME.profile)}>
              <AntDesgin name='user' style={{ color: 'white', fontSize: 30, marginLeft: 10 }} />
            </Text>
          </View>

          <View>
          <TouchableOpacity style={{ backgroundColor: 'firebrick', padding: 5 }} onPress={logout} >
              <AntDesgin name='logout' style={{ color: 'white', fontSize: 25, marginRight: 10, }} />
            </TouchableOpacity>
          </View>

        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Text style={{ marginTop: 37, color: 'white',marginEnd: 5 }}><AntDesgin name='pluscircle' style={{ color: 'white', fontSize: 30 }} onPress={() => navigation.navigate(PATH_HOME.addvehicle)}/></Text>
          <Text style={{ marginTop: 30, color: 'white', fontSize: 30, fontFamily:'Roboto-Bold', marginLeft:10 }} onPress={() => navigation.navigate(PATH_HOME.vehicle)}>My Vehicle</Text>
        </View>
        <Text style={{ color: 'firebrick', marginRight: 5 }}><AntDesgin name='car' style={{ color: 'white', fontSize: 100 }} /></Text>
      </View>
      
      <View
        style={{
          flex: 1,
          margin: 0,
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <View style={{ backgroundColor: "firebrick", flex: 1, height: 60, marginHorizontal: 5, borderRadius: 4, alignItems: 'center', justifyContent: 'center', elevation: 20 }}>
            <View style={{ flexDirection: 'row', marginVertical: 5,}}>
              <Text style={{color: 'white', marginRight: 5  }}><AntDesgin name='car' style={{ color: 'white', fontSize: 20 }} /></Text>
              <Text style={{ color: 'white' }} onPress={() => navigation.navigate(PATH_HOME.workshop)}>Workshop</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <View style={{ backgroundColor: "white", flex: 1, height: 60, marginHorizontal: 5, borderRadius: 4, alignItems: 'center', justifyContent: 'center', elevation: 20 }}>
          <View style={{ flexDirection: 'row', marginVertical: 5, }}>
              <Text style={{color: 'firebrick', marginRight: 5 }}><AntDesgin name='find' style={{ color: 'firebrick', fontSize: 20 }} /></Text>
              <Text style={{ color: 'firebrick' }} onPress={() => navigation.navigate(PATH_HOME.myappointment)}>My Appointment</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "firebrick", flex: 1, height: 60, marginHorizontal: 5, borderRadius: 4, alignItems: 'center', justifyContent: 'center', elevation: 20 }}>
          <View style={{ flexDirection: 'row', marginVertical: 5,}}>
              <Text style={{color: 'white', marginRight: 5  }}><AntDesgin name='Safety' style={{ color: 'white', fontSize: 20 }} /></Text>
              <Text style={{ color: 'white' }} onPress={() => navigation.navigate(PATH_HOME.history)}>Transactions History</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <View style={{ width: '80%' }}>
          <Text style={{color: 'black'}}>FAQs</Text>
        </View>

        <View style={{ width: '80%', height: '20%', backgroundColor: 'red', margin: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gainsboro' }}>
          <Text style={{color: 'black'}}>What is PITSTOP?</Text>
        </View>

        <View style={{ width: '80%', height: '20%', backgroundColor: 'red', margin: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gainsboro' }}>
          <Text style={{color: 'black'}}>Does PITSTOP charge a membership fee?</Text>
        </View>

        <View style={{ width: '80%', height: '20%', backgroundColor: 'red', margin: 5, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gainsboro' }}>
          <Text style={{color: 'black'}}>What are pitstop speciality?</Text>
        </View>
      </View>

    </>

  );
}


export default Dashboard;
