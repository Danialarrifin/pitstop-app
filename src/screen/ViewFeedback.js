import { Button, View, Text } from 'react-native'; 
import { PATH_AUTH } from '../navigations/path';
function ViewFeedback({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>View ViewFeedback</Text>
        {/* <Button
          title="Go to Login"
          onPress={() => navigation.navigate(PATH_AUTH.login)}
        /> */}
      </View>
    );
  }

  export default ViewFeedback;
