import { Button, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign';
import axiosInstance from '../utils/axios';


function ViewVehicle({ navigation }) {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    getAllVehicle();
  });

  const getAllVehicle = async () => {
    try {
      const response = await axiosInstance.get(
        "/vehicles",
        {
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbjNAdGVzdC5jb20iLCJpYXQiOjE2ODYxMTk0NjUsImV4cCI6MTY4NjIwNTg2NX0.OLaKGGIy0M9uOiYq3m2aO3-cB0FR7h4TqqLny9biYfU`
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
                  <Text>{item.manufacturer}</Text>
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
                  <Text>{item.model}</Text>
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
                  <Text>{item.plate_num}</Text>
                </View>
              </View>
            ) : null}
        </View>
      </View>
    </>
  );
}

export default ViewVehicle;
