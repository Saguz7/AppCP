import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NotificationSettingsScreen from './NotificationSettingsScreen';
import NotificationsScreen from './NotificationsScreen';
import HistoryScreen from './HistoryScreen';
import { Menu, Provider as PaperProvider } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({
  subDistrict,
  setSubDistrict,
  pool,
  setPool,
  smsNotification,
  setSmsNotification,
  emailNotification,
  setEmailNotification,
  handleSubmit,
  handleLogout, // Recibe la función de logout
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
  handleLogout: () => void; // Declara el tipo de la función
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        {/* Header with title and menu button */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome User</Text>
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <TouchableOpacity onPress={() => setVisible(true)} style={styles.menuButton}>
                <Text style={styles.menuButtonText}>⋯</Text>
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={handleLogout} title="Logout" />
          </Menu>
        </View>
        
        {/* Tab Navigator */}
        <Tab.Navigator>
        <Tab.Screen
            name="Configure"
            children={() => (
              <NotificationSettingsScreen
                subDistrict={subDistrict}
                setSubDistrict={setSubDistrict}
                pool={pool}
                setPool={setPool}
                smsNotification={smsNotification}
                setSmsNotification={setSmsNotification}
                emailNotification={emailNotification}
                setEmailNotification={setEmailNotification}
                handleSubmit={handleSubmit}
                key="NotificationSettingsScreen" // Añadir key manualmente aquí si es necesario
              />
            )}
          />
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
        </Tab.Navigator>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#f5f5f5', // Cambia el color según tu diseño
  },
  menuButton: {
    padding: 8,
  },
  menuButtonText: {
    fontSize: 24,
    color: 'black',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    flex: 1, // Ocupa el espacio disponible a la izquierda
  },
});

export default TabNavigator;