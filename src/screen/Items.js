import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'

function Items({ navigation }) {
    return (
        <>
            <View style={{ backgroundColor: 'firebrick',  borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop)}/>
                    <Text style={{marginTop: 18, fontSize: 15, marginLeft: 140, color: 'white'}}> Services</Text>
                </View>
            </View>
        </>
    );
}

export default Items;
