import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function LocationDetails({ route }) {
  const { from, route: routeNumber, destination } = route.params;
  
  const [activeTab, setActiveTab] = useState('Stations');
  
  const tabs = ['From Timing', 'To Timing', 'Stations'];
  const data = {
    'From Timing': ['6:00 AM', '8:00 AM', '10:00 AM'],
    'To Timing': ['7:00 AM', '9:00 AM', '11:00 AM'],
    'Stations': [
      'Jail Road', 'Kirti Satmabh', 'Nyay Mandir', 'Mandvi', 'Panigate',
      'Uma', 'Vrundavan', 'Bapod (Bypass)', 'Ankhol', 'Khatamba', 'Sumandeep', 'Parul'
    ],
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.routeTitle}>3C - Station To Waghodiya</Text>
        {/* <View style={styles.columnHeader}>
          <Text style={styles.columnText}>From Time</Text>
          <Text style={styles.columnText}>To Time</Text>
          <Text style={styles.columnText}>Station</Text>
        </View> */}
      </View>
      
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity 
            key={tab} 
            style={[styles.tab, activeTab === tab && styles.activeTab]} 
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Content */}
      <ScrollView style={styles.contentContainer}>
        {data[activeTab].map((item, index) => (
          <View key={index} style={[styles.stationItem, index % 2 === 0 ? styles.itemEven : styles.itemOdd]}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  
  header: { backgroundColor: '#f4b400', padding: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  routeTitle: { fontSize: 22, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 10 },
  columnHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  columnText: { fontSize: 16, fontWeight: '600', color: '#000' },
  
  tabContainer: { flexDirection: 'row', marginTop: 10, paddingHorizontal: 10 },
  tab: { flex: 1, padding: 12, alignItems: 'center', borderBottomWidth: 2, borderColor: 'transparent' },
  activeTab: { borderColor: '#f4b400' },
  tabText: { fontSize: 16, color: '#888' },
  activeTabText: { fontSize: 16, fontWeight: 'bold', color: '#f4b400' },
  
  contentContainer: { padding: 15 },
  stationItem: { padding: 15, borderRadius: 10, marginBottom: 5 },
  itemEven: { backgroundColor: '#f4b400' },
  itemOdd: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#f4b400' },
  itemText: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#000' }
});
