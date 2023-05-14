import { Button, View, Text } from 'react-native'; 
import { PATH_AUTH } from '../navigations/path';
function Assistance({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>View Assistance</Text>
        {/* <Button
          title="Go to Login"
          onPress={() => navigation.navigate(PATH_AUTH.login)}
        /> */}
      </View>
    );
  }

  export default Assistance;
