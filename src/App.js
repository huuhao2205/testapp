import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToDo from './screens/ToDo';
import Done from './screens/Done';
import Task from './screens/Task';
import Splash from './screens/Splash';
import Tutorial from './screens/Tutorial';

import { Provider } from 'react-redux';
import { Store } from './redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'To-Do') {
              iconName = 'clipboard-list';
              size = focused ? 25 : 20;
            } else if (route.name === 'Done') {
              iconName = 'clipboard-check';
              size = focused ? 25 : 20;
            } else if (route.name === 'Tutorial') {
              iconName = 'book';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })
      }
      tabBaroptions={{
        activeTintColor: '#0080ff',
        inactiveTintColor: '#777777',
        labelStyle: { fontSize: 15, fontWeight: 'bold' },
      }}
      initialRouteName='To-Do'
    >
      <Tab.Screen name={'Tutorial'} component={Tutorial} options={{ header: () => null }} />
      <Tab.Screen name={'To-Do'} component={ToDo} options={{ header: () => null }} />
      <Tab.Screen name={'Done'} component={Done} options={{ header: () => null }} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="My Tasks"
            component={HomeTabs}
          />
          <RootStack.Screen
            name="Task"
            component={Task}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;