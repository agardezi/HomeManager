import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import HomeScreen from './screens/HomeScreen';
import SmartMirrorScreen from './screens/SmartMirrorScreen'
import EditModuleScreen from './screens/EditModuleScreen'
import { Provider } from 'react-redux'
import {fetchConfig} from './stores/smartMirror/SmartMirrorAction';

import store from './stores/store'


enableScreens();
const Stack = createNativeStackNavigator();
const navigationOptions = {
  header: null
}

function NavigationStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
        
      />
      <Stack.Screen
        name="Smart Mirror"
        component={SmartMirrorScreen}
        options={{
          headerTranslucent:false,
          headerTintColor:'#FFFFFF',
          headerRight: () => 
          (            
            <Button
              onPress={() => alert('Feature Coming Soon')}
              title="Settings"
              color="#fff"
              />
          )
          // stackPresentation:'modal',
          // headerRight: <Text>Settings</Text>
        }}
      />
      <Stack.Screen 
        name="EditModule"
        component={EditModuleScreen}
        options={{
          headerShown: true,
          headerTranslucent:false,
          headerTintColor:'#FFFFFF',
          stackPresentation:'modal',
          headerRight: () => 
            (            
              <Button
                onPress={() => alert('Feature Coming Soon')}
                title="Save"
                color="#fff"
                />
            ) 
          }}
        />
    </Stack.Navigator>
  )
}
function Router(){
  return(
    <View style={styles.container}>
    {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
    <NavigationContainer theme={DarkTheme}>
      <NavigationStack />
    </NavigationContainer>
  </View>
  )
}

export default function App(props) {
  fetchConfig();
  const isLoadingComplete = useCachedResources();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
