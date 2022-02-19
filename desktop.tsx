import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DetailsScreen } from "./screens/details";
import { HomeScreen } from "./screens/home";
import { SettingsScreen } from "./screens/settings";

const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                height: 50,
                justifyContent: "flex-start",
                alignItems: "center"
            }}>
            <Text style={{ paddingLeft: 16, fontSize: 24, fontWeight: "bold", color: '#f4511e' }}>Brand</Text>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ paddingLeft: 20, paddingRight: 20, alignItems: "center" }}
                    >
                        <Text style={{ color: isFocused ? '#f4511e' : 'gray' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
            <Text
                style={{
                    justifyContent: "flex-end",
                    marginLeft: "auto",
                    paddingRight: 20
                }}
                onPress={() => alert("Sample")}>Built With Expo Web ⚡️</Text>
        </View>
    );
}

export default class DesktopComponent extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBar={props => <MyTabBar {...props} />}
                initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Details" component={DetailsScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>

        )
    }
};