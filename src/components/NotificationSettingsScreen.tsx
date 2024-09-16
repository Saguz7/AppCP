import React from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const NotificationSettingsScreen = ({
  subDistrict,
  setSubDistrict,
  pool,
  setPool,
  smsNotification,
  setSmsNotification,
  emailNotification,
  setEmailNotification,
  handleSubmit,
}: {
  subDistrict: string;
  setSubDistrict: (value: string) => void;
  pool: string;
  setPool: (value: string) => void;
  smsNotification: boolean;
  setSmsNotification: (value: boolean) => void;
  emailNotification: boolean;
  setEmailNotification: (value: boolean) => void;
  handleSubmit: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configure your notification preferences</Text>

      <Text style={styles.label}>Sub District</Text>
      <Picker
        selectedValue={subDistrict}
        onValueChange={(itemValue) => setSubDistrict(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Sub District 1" value="subDistrict1" />
        <Picker.Item label="Sub District 2" value="subDistrict2" />
      </Picker>

      <Text style={styles.label}>Pool</Text>
      <Picker
        selectedValue={pool}
        onValueChange={(itemValue) => setPool(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Pool 1" value="pool1" />
        <Picker.Item label="Pool 2" value="pool2" />
      </Picker>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>SMS Notifications</Text>
        <Switch
          value={smsNotification}
          onValueChange={setSmsNotification}
          style={styles.switch}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Email Notifications</Text>
        <Switch
          value={emailNotification}
          onValueChange={setEmailNotification}
          style={styles.switch}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black' 

  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black' 

  },
  picker: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'black' 

  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switch: {
    marginLeft: 10,
    color: 'black' 

  },
});

export default NotificationSettingsScreen;