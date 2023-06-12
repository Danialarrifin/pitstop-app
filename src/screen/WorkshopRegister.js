import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Button, View, Text, TextInput, ScrollView } from 'react-native';
import { PATH_AUTH, PATH_HOME } from '../navigations/path';

function WorkshopRegister({ navigation }) {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [contact, setContactNum] = useState(null);
    const [address, setAddress] = useState(null);
    const [state, setState] = useState(null);
    const [postcode, setPostcode] = useState(null);
    const [city, setCity] = useState(null);


    const { register } = useContext(AuthContext);

    return (
        <ScrollView contentContainerStyle={{ padding: 10, marginTop: 15 }} style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}>Name</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }}  value={name}
                        onChangeText={text => setName(text)}/>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }} >Phone Number</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} value={contact}
                        onChangeText={text => setContactNum(text)} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }} >Email Address</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} value={email}
                        onChangeText={text => setEmail(text)}/>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }}> Address</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} value={address}
                        onChangeText={text => setAddress(text)}/>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }} > State</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} value={state}
                        onChangeText={text => setState(text)}/>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }} > Postcode</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} value={postcode}
                        onChangeText={text => setPostcode(text)}/>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }} > City</Text>
                    <TextInput style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} value={city}
                        onChangeText={text => setCity(text)}/>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ color: 'firebrick' }} > Password</Text>
                    <TextInput secureTextEntry style={{ height: 50, width: 'auto', marginBottom: 15, borderColor: 'black', borderWidth: 1, backgroundColor: 'white', borderRadius: 4 }} value={password}
                        onChangeText={text => setPassword(text)}/>
                </View>
                <View style={{ width: '80%' }}>
                    <Button
                        color={'#b22222'}
                        title="Sign Me Up"
                        onPress={() => {
                            register({
                                name,
                                email,
                                password,
                                address,
                                city,
                                contact_num: contact,
                                state,
                                postcode,
                                isWorkshop: true,
                            });
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default WorkshopRegister;
