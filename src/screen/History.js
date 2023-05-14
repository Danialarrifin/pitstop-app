import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'


function History({ navigation }) {
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
      <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 30, height: '30%', marginLeft: 30, marginBottom: 10, elevation: 10, justifyContent: 'center', width: '85%' }}>
        <Text style={{ fontSize: 20, marginBottom: 5, color: 'white' }}>Pohleh Workshop Sdn Bhd</Text>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='calendar' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
          <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>29/11/2022</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <AntDesgin name='car' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
          <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>Brake Pad Change and Flat Tyre</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <AntDesgin name='pay-circle-o1' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
          <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>RM350.00</Text>
        </View>
      </View>

      <View style={{ backgroundColor: 'firebrick', alignItems: 'center', borderRadius: 30, height: '30%', marginLeft: 30, marginBottom: 10, elevation: 10, justifyContent: 'center', width: '85%' }}>
        <Text style={{ fontSize: 20, marginBottom: 5, color: 'white' }}>Serv Malaysia</Text>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='calendar' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
          <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>4/11/2022</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <AntDesgin name='car' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
          <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>Engine Overhaul</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <AntDesgin name='pay-circle-o1' style={{ color: 'white', fontSize: 20, marginTop: 5 }} />
          <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: 20 }}>RM1000.00</Text>
        </View>
      </View>
    </>
  );
}

export default History;
