import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Profile from './pages/profile';
import Search from './pages/search';
import TabComponent from './routes/tabs';

export default function App() {
  return (
    <TabComponent />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
