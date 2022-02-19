import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/home';
import { DetailsScreen } from './screens/details';
import { SettingsScreen } from './screens/settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

const Tab = createBottomTabNavigator();

export default class MobileComponent extends React.Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Details') {
                            iconName = 'md-information';
                        }
                        else if (route.name === 'Settings') {
                            iconName = 'md-settings';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#f4511e',
                    tabBarInactiveTintColor: 'gray',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="Details"
                    component={DetailsScreen}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                />
            </Tab.Navigator>
        )
    }
};