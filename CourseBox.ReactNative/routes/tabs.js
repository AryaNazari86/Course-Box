import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Profile from '../pages/profile';
import Search from '../pages/search';
import Home from '../pages/home';
import { globalStyles } from '../shared/globalStyle';


export default function Tab() {
    // The index of each tab.
    const [index, setIndex] = useState(0);
    // Configuring each tab.
    const [routes] = useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'search', title: 'Search', icon: 'magnify' },
        { key: 'profile', title: 'Profile', icon: 'account-circle' },
    ]);
    // Setting the page of each tab.
    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        search: Search,
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