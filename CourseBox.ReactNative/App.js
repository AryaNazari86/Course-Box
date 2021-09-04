import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Profile from './pages/profile';
import Search from './pages/search';
// import Tabs from './routes/tabs';

export default function App() {
  return (
    <Profile accountName='Ilia Soleymani'
      accountCoursesVal='3'
      accountFollowersVal='567K'
      accountParticipatedVal='36'
      profileAccountDescription='This is an account Description!!!'
    />
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
