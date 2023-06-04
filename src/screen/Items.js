import { Button, View, Text } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';
import AntDesgin from 'react-native-vector-icons/AntDesign'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const headers =['Header 1', 'Header 2', 'Header 3', 'Header 4']
const rows= [
    ['Row 11', 'Row 11', 'Row 11', 'Row 11']
]

function Items({ navigation }) {
    return (
        <>
            <View style={{ backgroundColor: 'firebrick',  borderBottomEndRadius: 4, height: '10%' }} >
                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <AntDesgin name='arrowleft' style={{ color: 'white', fontSize: 20, marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate(PATH_HOME.viewworkshop)}/>
                    <Text style={{marginTop: 18, fontSize: 15, marginLeft: 140, color: 'white'}}> Services</Text>
                </View>
            </View>
            <View style={{flex: 1, padding: 10}}>
                <Table borderStyle={{borderWidth: 1}}>
                    <Row
                    data={headers}
                    style={{
                        backgroundColor:'firebrick'
                    }}
                    height={40}
                    flexArr={[1,1,1,1]}
                    textStyle={{
                        textAlign: 'center'
                    }}
                    />
                    <TableWrapper>
                        <Rows data={rows} heightArr={[28, 28, 28, 28]} flexArr={[1,1,1,1]} textStyle={{
                            textAlign: 'center'
                        }} />
                    </TableWrapper>
                </Table>
            </View>
        </>
    );
}

export default Items;
