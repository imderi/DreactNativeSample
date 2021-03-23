import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';

// PAGES
import AccountScreen from '../screens/AccountScreen'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SettingsScreen from '../screens/SettingsScreen';

// NAVIGATOR TYPES
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Menu Routes" options={({navigation:{navigate}}) => ({
                    title: "Dreact",
                    headerTitleAlign: "left",
                    headerRight: () => (
                        <View style={{ flexDirection: "row" }}>
                            <IconButton size={26} icon="magnify" onPress={() => navigate("Search")} />
                            <IconButton size={26} icon="account-circle" onPress={() => navigate("Account")} />
                        </View>
                    )
                })} component={MenuRoutes}
                />
                <Stack.Screen name="Search" component={AccountScreen} />
                <Stack.Screen name="Account" component={AccountScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MenuRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = "ios-home";

                        if (route.name === "Home") {

                        } else if (route.name === "Explore") {
                            iconName = "ios-compass"
                        } else if (route.name === "More") {
                            iconName = "ios-ellipsis-horizontal-circle"
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    }
                })
            }
        >
            <Tab.Screen name="Home" component={DashboardRoutes} />
            <Tab.Screen name="Explore" component={ExploreRoutes} />
            <Tab.Screen name="More" component={SettingsRoutes} />
        </Tab.Navigator>
    )
}

const DashboardRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const ExploreRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const MoreRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="More" component={SettingsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const SettingsRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Routes;
