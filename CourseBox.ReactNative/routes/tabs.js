import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Profile from '../pages/profile';
import Search from '../pages/search';
import { globalStyles } from '../shared/globalStyle';


export default function TabComponent() {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'search', title: 'Search', icon: 'magnify' },
        { key: 'profile', title: 'Profile', icon: 'account-circle' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        search: Search,
        profile: Profile,
    });

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