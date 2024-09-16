import React, { useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet, Linking } from 'react-native';

const NotificationsScreen = () => {
  const [subDistrict, setSubDistrict] = useState('Sub District 1');
  const [pool, setPool] = useState('Pool A');

  const notifications = [
    {
      time: '10:45 PM Aug 21, 2024',
      description: `A change to the lineup for ${subDistrict} was identified at 10:45 PM Aug 21, 2024 Mountain. Please validate new information at CPKC Crew Information Website.`,
      link: 'https://cpkc-crew-info.com',
    },
    {
      time: '8:30 AM Aug 15, 2024',
      description: `A change to the lineup for ${subDistrict} was identified at 8:30 AM Aug 15, 2024 Mountain. Please validate new information at CPKC Crew Information Website.`,
      link: 'https://cpkc-crew-info.com',
    },
    {
      time: '4:00 PM Aug 12, 2024',
      description: `A change to the lineup for ${subDistrict} was identified at 4:00 PM Aug 12, 2024 Mountain. Please validate new information at CPKC Crew Information Website.`,
      link: 'https://cpkc-crew-info.com',
    },
    {
      time: '10:45 PM Aug 21, 2024',
      description: `A change to the lineup for ${subDistrict} was identified at 10:45 PM Aug 21, 2024 Mountain. Please validate new information at CPKC Crew Information Website.`,
      link: 'https://cpkc-crew-info.com',
    },
    {
      time: '8:30 AM Aug 15, 2024',
      description: `A change to the lineup for ${subDistrict} was identified at 8:30 AM Aug 15, 2024 Mountain. Please validate new information at CPKC Crew Information Website.`,
      link: 'https://cpkc-crew-info.com',
    },
    {
      time: '4:00 PM Aug 12, 2024',
      description: `A change to the lineup for ${subDistrict} was identified at 4:00 PM Aug 12, 2024 Mountain. Please validate new information at CPKC Crew Information Website.`,
      link: 'https://cpkc-crew-info.com',
    },
    {
      time: '10:45 PM Aug 21, 2024',
      description: `A change to the lineup for ${subDistrict} was identified at 10:45 PM Aug 21, 2024 Mountain. Please validate new information at CPKC Crew Information Website.`,
      link: 'https://cpkc-crew-info.com',
    },
    {
      time: '8:30 AM Aug 15, 2024',
      description: `A change to the lineup for ${subDistrict} was identified at 8:30 AM Aug 15, 2024 Mountain. Please validate new information at CPKC Crew Information Website.`,
      link: 'https://cpkc-crew-info.com',
    },
    {
      time: '4:00 PM Aug 12, 2024',
      description: `A change to the lineup for ${subDistrict} was identified at 4:00 PM Aug 12, 2024 Mountain. Please validate new information at CPKC Crew Information Website.`,
      link: 'https://cpkc-crew-info.com',
    },
  ];

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}> 
      {/* Sub District and Pool Buttons */}
      <View style={styles.filterContainer}>
        <Button title="Sub District" onPress={() => {}} />
        <Button title="Pool" onPress={() => {}} />
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationList}>
        <Text style={styles.subDistrictHeader}>{subDistrict} Change Events:</Text>
        {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationItem}>
            <Text style={styles.notificationTime}>{notification.time}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
            <Text style={styles.notificationLink} onPress={() => handleLinkPress(notification.link)}>
              CPKC Crew Information Website
            </Text>
            {index < notifications.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  logoutLink: {
    color: 'blue',
    textAlign: 'right',
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: 'black' 

  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
    color: 'black' 

  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  notificationList: {
    flex: 1,
  },
  subDistrictHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  notificationItem: {
    marginBottom: 16,
  },
  notificationTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black' 

  },
  notificationDescription: {
    fontSize: 14,
    marginVertical: 8,
    color: 'black' 

  },
  notificationLink: {
    color: 'blue',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 16,
    color: 'black' 

  },
});

export default NotificationsScreen;