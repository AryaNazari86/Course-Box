import React, { useState } from 'react';
import { BackHandler } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import Profile from '../pages/profile';
import HomeStack from '../routes/homeStack';
import SearchStack from '../routes/searchStack';
import { globalStyles } from '../shared/globalStyle';


export default function Tab() {
    // If Back Button clicked close 
    BackHandler.addEventListener('hardwareBackPress', () => {
        BackHandler.exitApp();
        return false;
    });

    // The index of each tab.
    const [index, setIndex] = useState(0);

    // Configuring each tab.
    const [routes] = useState([
        { key: 'search', title: 'Search', icon: 'magnify' },
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'profile', title: 'Profile', icon: 'account-circle' },
    ]);

    // Setting the page of each tab.
    const renderScene = BottomNavigation.SceneMap({
        search: SearchStack,
        home: HomeStack,
        profile: Profile,
    });

    // Return a BottomNavigation component that renders tabs.
    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            sceneAnimationEnabled={true}
            activeColor="#fca311"
            inactiveColor="#E5E5E5"
            barStyle={globalStyles.tabBar}
        />
    );
};