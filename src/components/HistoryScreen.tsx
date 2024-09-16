import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Switch, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type HistoryEntry = {
  type: string;
  fromDate: string;
  toDate: string;
};

const HistoryScreen = () => {
  const [workEventsEnabled, setWorkEventsEnabled] = useState(true);
  const [timeslipsEnabled, setTimeslipsEnabled] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]); // Definir el tipo de los elementos del historial

  const today = new Date();

  const handleFromDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || fromDate;
    setShowFromPicker(false);
    setFromDate(currentDate);
  };

  const handleToDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || toDate;
    setShowToPicker(false);
    if (currentDate <= today) {
      setToDate(currentDate);
    } else {
      Alert.alert('The selected date cannot be later than today');
    }
  };

  const handleView = () => {
    // Crear una nueva entrada para el historial
    const newEntry: HistoryEntry = {
      type: workEventsEnabled ? 'Work Event' : 'Time Slip',
      fromDate: fromDate.toDateString(),
      toDate: toDate.toDateString(),
    };

    // Agregar la nueva entrada al historial
    setHistory([...history, newEntry]);
  };

  return (
    <View style={styles.container}>
      {/* Work Events and Timeslips Switches */}
      <View style={styles.switchContainer}>
        <View style={styles.switchRow}>
          <Text style={styles.slidertop}>Work Events</Text>
          <Switch
            value={workEventsEnabled}
            onValueChange={setWorkEventsEnabled}
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.slidertop}>Timeslips</Text>
          <Switch
            value={timeslipsEnabled}
            onValueChange={setTimeslipsEnabled}
          />
        </View>
      </View>

      {/* Date Pickers */}
      <View style={styles.dateContainer}>
        <Text>From:</Text>
        <Button title={fromDate.toDateString()} onPress={() => setShowFromPicker(true)} />
        {showFromPicker && (
          <DateTimePicker
            value={fromDate}
            mode="date"
            display="default"
            onChange={handleFromDateChange}
          />
        )}

        <Text>To:</Text>
        <Button title={toDate.toDateString()} onPress={() => setShowToPicker(true)} />
        {showToPicker && (
          <DateTimePicker
            value={toDate}
            mode="date"
            display="default"
            onChange={handleToDateChange}
            maximumDate={today}
          />
        )}
      </View>

      {/* View Button */}
      <Button title="View" onPress={handleView} />

      {/* Results */}
      <ScrollView style={styles.notificationList}>
        <Text style={styles.notificationHeader}>History</Text>
        {history.map((item, index) => (
          <View key={index} style={styles.notificationItem}>
            <Text style={styles.notificationTime}>{item.type}: {item.fromDate} - {item.toDate}</Text>
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slidertop: {
    color: 'black',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
  },
  notificationList: {
    flex: 1,
  },
  notificationHeader: {
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
    color: 'black',
  },
});

export default HistoryScreen;
