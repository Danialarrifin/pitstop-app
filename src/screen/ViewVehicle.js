import { Button, View, Text } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign';
import axiosInstance from '../utils/axios';
import { AuthContext } from '../context/AuthContext';


function ViewVehicle({ navigation }) {
  const [vehicle, setVehicle] = useState([]);
const { userInfo } = useContext(AuthContext);


  useEffect(() => {
    getAllVehicle();
  }, []);

  const getAllVehicle = async () => {
    try {
      const response = await axiosInstance.get(
        "/vehicles",
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
              marginLeft: 130,
              color: 'white',
            }}>
            {' '}
            View Vehicle
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
          Vehicles
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
              <Text style={{color: 'white'}}>Manufacturer</Text>
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
              <Text style={{color: 'white'}}>Model</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                flex: 1,
                height: '100%',
              }}>
              <Text style={{color: 'white'}}>Plate Number</Text>
            </View>
          </View>

          {vehicle.length > 0 ?
            vehicle.map((item) =>
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
                  <Text  style={{color: 'black'}}>{item.manufacturer}</Text>
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
                  <Text  style={{color: 'black'}}>{item.model}</Text>
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
                  <Text  style={{color: 'black'}}>{item.plate_num}</Text>
                </View>
              </View>
            ) : null}
        </View>
      </View>
    </>
  );
}

export default ViewVehicle;
