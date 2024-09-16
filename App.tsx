import React, { useState } from 'react';
import LoginScreen from './src/components/LoginScreen';
import TabNavigator from './src/components/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';

function App(): React.JSX.Element {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [subDistrict, setSubDistrict] = useState('');
  const [pool, setPool] = useState('');
  const [smsNotification, setSmsNotification] = useState(false);
  const [emailNotification, setEmailNotification] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      Alert.alert('Credenciales incorrectas');
    }
  };

  const handleSubmit = () => {
    console.log('SubDistrict:', subDistrict);
    console.log('Pool:', pool);
    console.log('SMS Notifications:', smsNotification);
    console.log('Email Notifications:', emailNotification);
    Alert.alert('Configuraciones guardadas correctamente');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TabNavigator
          subDistrict={subDistrict}
          setSubDistrict={setSubDistrict}
          pool={pool}
          setPool={setPool}
          smsNotification={smsNotification}
          setSmsNotification={setSmsNotification}
          emailNotification={emailNotification}
          setEmailNotification={setEmailNotification}
          handleSubmit={handleSubmit}
          handleLogout={handleLogout} // Pasa la función de logout
        />
      ) : (
        <LoginScreen
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          handleLogin={handleLogin}
        />
      )}
    </NavigationContainer>
  );
}

export default App;