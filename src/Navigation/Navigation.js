import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Splash from '../Layout/Auth/Splash';
import Login from '../Layout/Auth/Login';
import Home from '../Layout/Auth/Home/Home';
import Profile from '../Layout/Auth/Profile/Profile';

const AuthStack = createStackNavigator();

const AuthStackScreen = () =>(
  
        <AuthStack.Navigator
            initialRouteName="Login"
            headerMode = "none"
        >
             <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
)


const AppTabs = createBottomTabNavigator();

const AppTabsScreen =() =>(
     <AppTabs.Navigator>
         <AppTabs.Screen
            name = 'home'
            component={Home}
            options={{
                tabBarIcon:() =>(
                    <MaterialCommunityIcons name='home' color={'black'} size={30}/>
                )
            }}
         />

        <AppTabs.Screen
            name = 'profile'
            component={Profile}
            options={{
                tabBarIcon:() =>(
                    <MaterialCommunityIcons name='home' color={'black'} size={30}/>
                )
            }}
         />


     </AppTabs.Navigator>
)

// Stack root (Principal)
const RootStack = createStackNavigator();

const RootStackScreen = () =>{
    return(

        <RootStack.Navigator
            initialRouteName="Splash"
            headerMode = "none"
        >
             <RootStack.Screen name="Splash" component={Splash} />
             <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
             <RootStack.Screen name="AppTabsScreen" component={AppTabsScreen} />
        </RootStack.Navigator>
    )
}

export default () =>{
    return(
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    )
}