import { Button, View, Text, TextInput, Image } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
function Workshop({ navigation }) {
  return (
    <>
      <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
          <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 140, color: 'white' }}> Workshops</Text>
        </View>
      </View>
      {/* <View style={{ alignItems: 'center', justifyContent: 'center', height: '10%', }}>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <TextInput style={{ height: 50, width: '70%', borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4, }}></TextInput>
        </View>
      </View> */}
      <View style={{ backgroundColor: 'white', alignItems: 'center', borderRadius: 50, height: '25%', marginLeft: 40, marginRight: 40, marginBottom: 10, marginTop: 10, elevation: 10, justifyContent: 'center' }}>
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Image source={require('../assets/icons/logo.png')} style={{ width: '200%', height: '200%'}}/>
        </View>    */}
        <View style={{ width: '30%', backgroundColor: 'grey', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'firebrick' }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop)}>View</Text>
        </View>
      </View>

      <View style={{ backgroundColor: 'white', alignItems: 'center', borderRadius: 50, height: '25%', marginLeft: 40, marginRight: 40, marginBottom: 10, elevation: 10, justifyContent: 'center' }}>
        <View style={{ width: '30%', backgroundColor: 'grey', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'firebrick' }}>View</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', alignItems: 'center', borderRadius: 50, height: '25%', marginLeft: 40, marginRight: 40, elevation: 10, justifyContent: 'center' }}>
        <View style={{ width: '30%', backgroundColor: 'grey', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'firebrick' }}>View</Text>
        </View>
      </View>
    </>
  );
}

export default Workshop;
