import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PATH_AUTH, PATH_HOME } from './path';
import LandingScreen from '../screen/Landing'
import LoginScreen from '../screen/Login';
import RegisterScreen from '../screen/Register';
import DashboardScreen from '../screen/Dashboard';
import ProfileScreen from '../screen/Profile';
import WorkshopScreen from '../screen/Workshop';
import AppointmentScreen from '../screen/Appointment'
import AssistanceScreen from '../screen/Assistance'
import HistoryScreen from '../screen/History'
import ForgotPasswordScreen from '../screen/ForgotPassword'
import ResetPasswordScreen from '../screen/ResetPassword'
import VehicleScreen from '../screen/Vehicle'
import AddVehicleScreen from '../screen/AddVehicle'
import MyAppointmentScreen from '../screen/MyAppointment'
import AppointmentConfirmationScreen from '../screen/AppointmentConfirmation'
import ViewWorkshopScreen from '../screen/ViewWorkshop'
import ItemsScreen from '../screen/Items'


const Stack = createNativeStackNavigator();

// const main = () => {
//     return (
//         <Stack.Navigator initialRouteName={PATH_AUTH.login}>
//             <Stack.Screen name={PATH_HOME.dashboard} component={DashboardScreen} />
//             <Stack.Screen name={PATH_HOME.profile} component={ProfileScreen} />
//         </Stack.Navigator>
//     )
// }

// const auth = () => {
//     return (
//         <Stack.Navigator initialRouteName={PATH_AUTH.login}>
//             <Stack.Screen name={PATH_AUTH.login} component={LoginScreen} />
//             <Stack.Screen name={PATH_AUTH.register} component={RegisterScreen} />
//         </Stack.Navigator>
//     )
// }

const app = () => {
    const isLoggedIn = false;

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName={PATH_AUTH.landing}>
                {/* {isLoggedIn ? */}
                    <Stack.Group>
                        <Stack.Screen name={PATH_HOME.dashboard} component={DashboardScreen} />
                        <Stack.Screen name={PATH_HOME.profile} component={ProfileScreen} />
                        <Stack.Screen name={PATH_HOME.workshop} component={WorkshopScreen} />
                        <Stack.Screen name={PATH_HOME.appointment} component={AppointmentScreen}/>
                        <Stack.Screen name={PATH_HOME.assistance} component={AssistanceScreen} />
                        <Stack.Screen name={PATH_HOME.history} component={HistoryScreen} />
                        <Stack.Screen name={PATH_HOME.vehicle} component={VehicleScreen} />
                        <Stack.Screen name={PATH_HOME.addvehicle} component={AddVehicleScreen} />
                        <Stack.Screen name={PATH_HOME.myappointment} component={MyAppointmentScreen} />
                        <Stack.Screen name={PATH_HOME.appointmentconfirmation} component={AppointmentConfirmationScreen} />
                        <Stack.Screen name={PATH_HOME.viewworkshop} component={ViewWorkshopScreen} />
                        <Stack.Screen name={PATH_HOME.items} component={ItemsScreen} />




                    {/* </Stack.Group>
                    
                    <Stack.Group> */}
                         <Stack.Screen name={PATH_AUTH.landing} component={LandingScreen} />
                        <Stack.Screen name={PATH_AUTH.login} component={LoginScreen} />
                        <Stack.Screen name={PATH_AUTH.register} component={RegisterScreen} />
                        <Stack.Screen name={PATH_AUTH.forgotpassword} component={ForgotPasswordScreen} />
                        <Stack.Screen name={PATH_AUTH.resetpassword} component={ResetPasswordScreen} />


                    </Stack.Group>

                {/* } */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default app;