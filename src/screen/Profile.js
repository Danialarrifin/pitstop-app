import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
function Profile({ navigation }) {
  return (
    <>
     <View style={{ backgroundColor: 'firebrick', borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.dashboard)} />
                    <Text style={{ marginTop: 18, fontSize: 15, marginLeft: 140, color: 'white' }}> My Profile</Text>
                </View>
            </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', height: '20%', backgroundColor: 'firebrick', borderRadius: 70, margin: 10}}>
        <Text>
          <AntDesgin name='user' style={{ color: 'white', fontSize: 100 }} />
        </Text>
      </View>
      <View style={{ justifyContent: 'flex-start', margin: 20 }}>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <Text style={{ color: 'white', marginRight: 80 }}><AntDesgin name='user' style={{ color: 'firebrick', fontSize:30 }} /></Text>
          <Text style={{ color: 'firebrick', fontSize:20 }}>Muhamad Mirza</Text>
        </View>
      </View>
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, width: '100%' }} />
      <View style={{  justifyContent: 'flex-start', margin: 20 }}>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <Text style={{ color: 'white', marginRight: 80 }}><AntDesgin name='phone' style={{ color: 'firebrick', fontSize:30 }} /></Text>
          <Text style={{ color: 'firebrick', fontSize:20 }}>01932765472</Text>
        </View>
      </View>
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, width: '100%' }} />
      <View style={{  justifyContent: 'flex-start', margin: 20 }}>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <Text style={{ color: 'white', marginRight: 80 }}><AntDesgin name='mail' style={{ color: 'firebrick', fontSize:30 }} /></Text>
          <Text style={{ color: 'firebrick', fontSize:20, }}>mirza123@gmail.com</Text>
        </View>
      </View>
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, width: '100%' }} />
      <View style={{  justifyContent: 'flex-start', margin:20 }}>
        <View style={{ flexDirection: 'row', marginVertical: 5, }}>
          <Text style={{ color: 'white', marginRight:80 }}><AntDesgin name='car' style={{ color: 'firebrick', fontSize:30 }} /></Text>
          <Text style={{ color: 'firebrick', fontSize:20 }}> My Vehicle</Text>
        </View>
      </View>
      <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, marginVertical: 10, width: '100%' }} />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '80%', height: '60%', }}>
                    <Button
                        color={'#b22222'}
                        title="Update Profile"
                    />
                </View>
            </View>
    </>

  );
}

export default Profile;
