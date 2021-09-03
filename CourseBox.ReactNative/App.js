import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './shared/header';
import Profile from './pages/profile';
import Search from './pages/search';

export default function App() {
  return (
    <Profile accountName='Ilia Soleymani' accountCoursesVal='3' accountFollowersVal='567K' accountParticipatedVal='36' />
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
