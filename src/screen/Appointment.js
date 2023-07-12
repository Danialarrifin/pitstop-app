import { Button, View, Text, TextInput, Image, Picker, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../utils/axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { Calendar } from 'react-native-calendars';

function Appointment({ navigation, route }) {
  const [selectedDate, setSelectedDate] = useState('2023-06-19');
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };


  const [showModal, setShowModal] = useState(false);
  const [timeSlotOpen, setTimeSlotOpen] = useState(false);
  const [timeSlotValue, setTimeSlotValue] = useState(null);
  const [timeSlot, setTimeSlot] = useState([

  ]);

  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [vehicleValue, setVehicleValue] = useState(null);
  const [vehicle, setVehicle] = useState([
  ]);

  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceValue, setServiceValue] = useState(null);
  const [service, setService] = useState([

  ]);

  const [workshop, setWorkshop] = useState([]);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (route.params.workshop) {
      console.log(route.params.workshop)
      setWorkshop(route.params.workshop);
    }
  }, [route]);

  const [vehicleList, setVehicleList] = useState([]);

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
      if (response.data.length > 0) {
        let _vehicleList = [];
        response.data.forEach(element => {
          _vehicleList.push({
            label: element?.model,
            value: element?.id
          });
        });
        console.log(_vehicleList);
        setVehicle(_vehicleList);
      }
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getAllTimeSlot();
  }, []);

  const getAllTimeSlot = async () => {
    try {
      const response = await axiosInstance.get(
        "/time_slots",
        {
          headers: {
            'Authorization': `Bearer ${userInfo?.access_token}`
          }
        }
      );
      console.log('response time_slots', response.data);
      if (response.data.length > 0) {
        let _timeSlotList = [];
        response.data.forEach(element => {
          _timeSlotList.push({
            label: element?.start_time + ' - ' + element?.end_time,
            value: element?.id
          });
        });
        console.log(_timeSlotList);
        setTimeSlot(_timeSlotList);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    try {
      const response = await axiosInstance.get(
        "/services",
        {
          headers: {
            'Authorization': `Bearer ${userInfo?.access_token}`
          }
        }
      );
      console.log('response services', response.data);
      if (response.data.length > 0) {
        let _servicesList = [];
        response.data.forEach(element => {
          _servicesList.push({
            label: element?.name,
            value: element?.id
          });
        });
        console.log(_servicesList);
        setService(_servicesList);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleAppointment = async () => {
    let res = await appointment();
  }

  const appointment = async () => {
    console.log(selectedDate, timeSlotValue, vehicleValue, serviceValue, userInfo.user.id, workshop.id)
    axiosInstance
      .post(`/appointments`, {
        date: selectedDate,
        time_slot_id: timeSlotValue,
        vehicle_id: vehicleValue,
        service_id: serviceValue,
        user_id: userInfo.user.id,
        workshop_id: workshop.id,
        status: 'pending'

      }, {
        headers: {
          'Authorization': `Bearer ${userInfo?.access_token}`
        }
      })
      .then(res => {
        console.log(res.data)
        navigation.navigate(PATH_HOME.appointmentconfirmation)
      })
      .catch(e => {
        console.log(`add appointment error ${e}`);
        return false;
      });
  }
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={datePickerVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setDatePickerVisible(!datePickerVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Calendar onDayPress={(day) => {
              console.log('onDayPress', day);
              setSelectedDate(day?.dateString);
              setDatePickerVisible(!datePickerVisible)
            }} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setDatePickerVisible(!datePickerVisible)}>
              <Text style={styles.textStyle}>Close Calendar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10, }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop)} />
          <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 100, color: 'white' }}> Book an Appointment</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
        <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto-Bold', }}>{workshop?.name}</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Text>
            <AntDesgin name='phone' style={{ color: 'black', fontSize: 30 }} />
          </Text>
          <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto-Bold' }}>{workshop?.contact_num}</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Text>
          <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
          <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
          <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
          <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
        </Text>
        <Text style={{color: 'black'}}>(4/5)</Text>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 5, marginBottom: 30 }}>
        <View style={{ backgroundColor: "white", flex: 1, height: 80, marginHorizontal: 5, borderRadius: 4, elevation: 20 }}>
          <View style={{ flexDirection: 'row', marginVertical: 5, }}>
            <Text style={{ color: 'black' }}>The Service is top tier! Reccomended!</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: 17 }}>
              <Text>
                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
              </Text>
              <Text style={{ fontSize: 10 }}>(4/5)</Text>
            </View>
            <View style={{ justifyContent: 'flex-end', marginLeft: 60 }}>
              <Text>Mirza</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white", flex: 1, height: 80, marginHorizontal: 5, borderRadius: 4, elevation: 20 }}>
          <View style={{ flexDirection: 'row', marginVertical: 5, }}>
            <Text style={{ color: 'black' }}>Highly Reccomended! Good service and workmanship.</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: 17 }}>
              <Text>
                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
                <AntDesgin name='star' style={{ color: 'yellow', fontSize: 15 }} />
              </Text>
              <Text style={{ fontSize: 10 }}>(4/5)</Text>
            </View>
            <View style={{ justifyContent: 'flex-end', marginLeft: 60 }}>
              <Text>Mirza</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'Roboto-Light' }}>Address</Text>
      </View>
      <View style={{ backgroundColor: "white", height: 70, marginHorizontal: 5, borderRadius: 4, elevation: 20, }}>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <Text style={{ color: 'black' }}>{workshop?.address_id?.address},</Text>
          <Text style={{ color: 'black', marginLeft: 5 }}>{workshop?.address_id?.city},</Text>
          <Text style={{ color: 'black', marginLeft: 5 }}>{workshop?.address_id?.postcode},</Text>
          <Text style={{ color: 'black', marginLeft: 5 }}>{workshop?.address_id?.state}</Text>
        </View>
      </View>
      <View style={{ marginTop: 15, marginLeft: 5, marginRight: 5, backgroundColor: 'firebrick', borderRadius: 50, height: '40%', elevation: 10, }}>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Text style={{ marginLeft: 30, color: 'white' }}>Date</Text>
          <Text style={{ marginLeft: 200, color: 'white' }}>Time</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5, zIndex: 99 }}>
          <TouchableOpacity style={{ marginLeft: 30, height: 50, width: '30%', borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 10, }} onPress={() => setDatePickerVisible(!datePickerVisible)}>
            <Text style={{ alignItems: 'center', justifyContent: 'center', color: 'black'}}>
              <AntDesgin name='calendar' style={{ color: 'black', fontSize: 15 }} />
              {selectedDate ? selectedDate : 'No date selected'}
            </Text>
          </TouchableOpacity>

          <DropDownPicker
            style={{ width: '35%', marginLeft: 80 }}
            placeholder='Select Time Slots'
            open={timeSlotOpen}
            value={timeSlotValue}
            items={timeSlot}
            setOpen={setTimeSlotOpen}
            setValue={setTimeSlotValue}
            setItems={setTimeSlot}
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
            
          />
        </View>
        <View style={{ zIndex: 88 }}>
          <View style={{ zIndex: 77 }}>
            <View style={{ marginLeft: 30 }}>
              <Text style={{ color: 'white', marginBottom: 5 }}>Vehicles</Text>
            </View>
            <DropDownPicker
              style={{ width: '85%', marginLeft: 26, zIndex: 0 }}
              placeholder='Select Your Vehicle '
              open={vehicleOpen}
              value={vehicleValue}
              items={vehicle}
              dropDownDirection='TOP'
              setOpen={setVehicleOpen}
              setValue={setVehicleValue}
              setItems={setVehicle}
              listMode="SCROLLVIEW"
            />
          </View>
          <View style={{ zIndex: 88 }}>
            <View style={{ marginLeft: 30 }}>
              <Text style={{ color: 'white', marginBottom: 5 }}>Services</Text>
            </View>
            <DropDownPicker
              style={{ width: '85%', marginLeft: 26 }}
              placeholder='Select Services'
              open={serviceOpen}
              value={serviceValue}
              items={service}
              setOpen={setServiceOpen}
              setValue={setServiceValue}
              setItems={setService}
              listMode="SCROLLVIEW"
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '80%', height: '60%', }}>
          <Button
            color={'#b22222'}
            title="Book an Appointment"
            onPress={() => {
              handleAppointment()
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Appointment;
