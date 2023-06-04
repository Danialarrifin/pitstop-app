import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const headers =['Workshop', 'Date', 'Time', 'Services', 'Status']
const rows= [
    ['Pohleh Workshop', '29/11/2022', '11.00 am - 12.30 pm', 'Brake Pad Change', 'Accept Reject'],
    ['Pohleh Workshop', '29/11/2022', '11.00 am - 12.30 pm', 'Brake Pad Change', 'Done'],
    ['Pohleh Workshop', '29/11/2022', '11.00 am - 12.30 pm', 'Brake Pad Change', 'Accept Reject'], 
]

function ViewAppointment({ navigation }) {
    return (
        <>
            <View style={{ backgroundColor: 'firebrick',  borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.myworkshop)}/>
                    <Text style={{marginTop: 18, fontSize: 15, marginLeft: 110, color: 'white'}}> View Appointment</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 20, marginBottom: 10, color: 'firebrick', fontFamily: 'Roboto-Bold' }} >Appointments</Text>
            </View>
            <View style={{width: '55%', marginLeft: 173}}>
            <Button
                    color={'#b22222'}
                    title="Completed Appointments"
                    onPress={() => navigation.navigate(PATH_HOME.completedappointment)}
                />
            </View>
            <View style={{flex: 1, padding: 10}}>
                <Table borderStyle={{borderWidth: 1}}>
                    <Row
                    data={headers}
                    style={{
                        backgroundColor:'firebrick'
                    }}
                    height={40}
                    flexArr={[1,1,1,1,1]}
                    textStyle={{
                        textAlign: 'center'
                    }}
                    />
                    <TableWrapper>
                        <Rows data={rows} heightArr={[50, 50, 50, 50,50]} flexArr={[1,1,1,1,1]} textStyle={{
                            textAlign: 'center'
                        }}/>
                    </TableWrapper>
                </Table>
            </View>
        </>
    );
}

export default ViewAppointment;
