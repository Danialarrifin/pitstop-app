import { Button, View, Text, TextInput, Image } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
function Appointment({ navigation }) {
  return (
    <>
     <View style={{ backgroundColor: 'firebrick',  borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 ,}} onPress={() => navigation.navigate(PATH_HOME.dashboard)}/>
                    <Text style={{marginTop: 18, fontSize: 15, marginLeft: 100, color: 'white'}}> Book an Appointment</Text>
                </View>
            </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
        <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Roboto-Light',  }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop)}>Pohleh Auto Workshop Sdn Bhd</Text>
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
      <View style={{ marginTop: 15, marginLeft: 5, marginRight: 5, backgroundColor: 'firebrick', borderRadius: 50, height: '35%', elevation: 10, }}>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Text style={{ marginLeft: 30, color: 'white' }}>Date</Text>
          <Text style={{ marginLeft: 200, color: 'white' }}>Time</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <TextInput style={{ marginLeft: 30, height: 40, width: '30%', borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4, }}>
            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
              <AntDesgin name='calendar' style={{ color: 'black', fontSize: 15 }} />
            </Text>
          </TextInput>
          <TextInput style={{ marginLeft: 105, height: 40, width: '30%', borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4, }}>
            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
              <AntDesgin name='clockcircleo' style={{ color: 'black', fontSize: 15 }} />
            </Text>
          </TextInput>
        </View>
        <View>
          <View style={{ marginLeft: 30 }}>
            <Text style={{ color: 'white', marginBottom: 5 }}>Vehicles</Text>
          </View>
          <TextInput style={{ marginLeft: 30, height: 40, width: '85%', borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4, }}>
            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
              <AntDesgin name='car' style={{ color: 'black', fontSize: 15 }} />
            </Text>
          </TextInput>
        </View>
        <View>
          <View style={{ marginLeft: 30 }}>
            <Text style={{ color: 'white', marginBottom: 5 }}>Services</Text>
          </View>
          <TextInput style={{ marginLeft: 30, height: 40, width: '85%', borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4, }}>
            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
              {/* <AntDesgin name='clockcircleo' style={{ color: 'black', fontSize: 15 }} /> */}
            </Text>
          </TextInput>
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
