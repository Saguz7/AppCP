import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View, TextInput, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Importamos CheckBox
import styles from './styles'; // Asegúrate de ajustar la importación si es necesario

interface LoginProps {
  username: string;
  setUsername: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
  handleLogin: () => void;
}

const LoginScreen: React.FC<LoginProps> = ({ username, setUsername, password, setPassword, rememberMe, setRememberMe, handleLogin }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.loginContainer}>
          <Text style={styles.title}>CPKC</Text>
          <Text style={styles.subtitle}>Work Change Notification</Text>

          {/* Add the Image below the subtitle */}
          <Image 
            source={require('../assets/images/CPKCLogo.png')} // Adjust the path to your image
            style={styles.image}
          />

          <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>UserName</Text>
            <TextInput
              style={[styles.input, { color: 'black' }]}
              placeholder="UserName"
              placeholderTextColor="gray"
              value={username}
              onChangeText={setUsername}
            />
            <Text style={styles.subtitle}>Password</Text>
            <TextInput
              style={[styles.input, { color: 'black' }]}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={rememberMe}
                onValueChange={setRememberMe}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Remember Me</Text>
            </View>

            <Button title="Login" onPress={handleLogin} />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
 
export default LoginScreen;