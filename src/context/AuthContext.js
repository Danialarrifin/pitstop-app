import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../constants/config';

export const AuthContext = createContext();

export const AuthProvider = ({ navigation, children}) => {
  const [userInfo, setUserInfo] = useState({});

  const register = ({ name, email, password, }) => {


    axios
      .post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        
      });
  };

  const login = async (email, password) => {


    axios
      .post(`${BASE_URL}/auth/login`, {
        email,
        password,
      })
      .then(res => {
        console.log(res)
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        return userInfo;
      })
      .catch(e => {
        console.log(`login error ${e}`);
        return false;
      });
  };

  const logout = () => {
   
   AsyncStorage.removeItem('userInfo')
   setUserInfo({})
    axios
      .get(
        `${BASE_URL}/auth/logout`,
        {
          headers: {Authorization: `Bearer ${userInfo.access_token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
       
      })
      .catch(e => {
        console.log(`logout error ${e}`);
       
      });
  };

  const isLoggedIn = async () => {
    try {
     

      let userInfo = await AsyncStorage.getItem('userInfo');
      console.log(userInfo)
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      
    } catch (e) {
      
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};