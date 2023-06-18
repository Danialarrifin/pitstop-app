import { Button, View, Text, TextInput, Image, Picker } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import React, { useState, useContext, useEffect} from "react";
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../utils/axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { Calendar } from 'react-native-calendars';

function Appointment({ navigation, route }) {
  const [showModal, setShowModal] = useState(false);
  const [timeSlotOpen, setTimeSlotOpen] = useState(false);
  const [timeSlotValue, setTimeSlotValue] = useState(null);
  const [timeSlot, setTimeSlot] = useState([
    { label: '1130-1230', value: '11.30-12.30' },
    { label: '1230-130', value: '11.30-1230' }
  ]);

  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [vehicleValue, setVehicleValue] = useState(null);
  const [vehicle, setVehicle] = useState([
    { label: 'Suzuki Swift', value: 'Suzuki Swift' },
    { label: 'BMW X5', value: 'BMW X5' }
  ]);

  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceValue, setServiceValue] = useState(null);
  const [service, setService] = useState([
    { label: 'Flat Tyre', value: 'flat tyre' },
    { label: 'Battery Change', value: 'Battery Change' }
  ]);

  const [workshop, setWorkshop] = useState([]);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
      getWorkshop();
  }, []);

  const getWorkshop = async () => {
      try {
        console.log(route)
          const response = await axiosInstance.get(
            `/workshops?workshopId=${route.params.workshopId ? route.params.workshopId : ''}`,
              {
                  headers: {
                      'Authorization': `Bearer ${userInfo?.access_token}`
                  }
              }
          );
          console.log('response workshop', response.data);
          if (response.data)
              setWorkshop(response.data);
      } catch (err) {
          console.log(err);
      }
  }

  return (
    <>
      <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10, }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop)} />
          <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 100, color: 'white' }}> Book an Appointment</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
        <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto-Light', }}>Pohleh sdn bhd</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Text>
          <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
          <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
          <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
          <AntDesgin name='star' style={{ color: 'yellow', fontSize: 30 }} />
        </Text>
        <Text>(4/5)</Text>
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
      <View style={{ marginTop: 15, marginLeft: 5, marginRight: 5, backgroundColor: 'firebrick', borderRadius: 50, height: '40%', elevation: 10, }}>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Text style={{ marginLeft: 30, color: 'white' }}>Date</Text>
          <Text style={{ marginLeft: 200, color: 'white' }}>Time</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <TextInput style={{ marginLeft: 30, height: 50, width: '30%', borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 10, }}>
            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
              <AntDesgin name='calendar' style={{ color: 'black', fontSize: 15 }}>
              
              </AntDesgin>
            </Text>
          </TextInput>

          {/* <Calendar
            onDayPress={(day) => console.log('onDayPress', day)}
            onDayLongPress={(day) => console.log('onDayLongPress', day)}
            onMonthChange={(date) => console.log('onMonthChange', date)}
            onPressArrowLeft={(goToPreviousMonth) => {
              console.log('onPressArrowLeft'); goToPreviousMonth();
            }}
            onPressArrowRight={(goToNextMonth) => {
              console.log('onPressArrowRight'); goToNextMonth();
            }}
          /> */}
          <DropDownPicker
            style={{ width: '35%', marginLeft: 80, }}
            placeholder='Select Time Slots'
            open={timeSlotOpen}
            value={timeSlotValue}
            items={timeSlot}
            setOpen={setTimeSlotOpen}
            setValue={setTimeSlotValue}
            setItems={setTimeSlot}
            listMode="SCROLLVIEW"

          />
        </View>
        <View>
          <View style={{ marginLeft: 30 }}>
            <Text style={{ color: 'white', marginBottom: 5 }}>Vehicles</Text>
          </View>
          <DropDownPicker
            style={{ width: '85%', marginLeft: 26 }}
            placeholder='Select Your Vehicle '
            open={vehicleOpen}
            value={vehicleValue}
            items={vehicle}
            setOpen={setVehicleOpen}
            setValue={setVehicleValue}
            setItems={setVehicle}
            listMode="SCROLLVIEW"

          />
        </View>
        <View>
          <View style={{ marginLeft: 30 }}>
            <Text style={{ color: 'white', marginBottom: 5 }}>Services</Text>
          </View>
          <DropDownPicker
            style={{ width: '85%', marginLeft: 26 }}
            placeholder='Select Services '
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '80%', height: '60%', }}>
          <Button
            color={'#b22222'}
            title="Book an Appointment"
            onPress={() => navigation.navigate(PATH_HOME.appointmentconfirmation)}
          />
        </View>
      </View>
    </>
  );
}

export default Appointment;
