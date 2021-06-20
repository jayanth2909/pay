import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';  
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/Splash'
import Home from './screens/Home'
import Success from './screens/Success'
import Donate from './screens/Donate'
const Stack=createStackNavigator();

export default function App(){
  return(
    
      <NavigationContainer>
        <Stack.Navigator
        initialRoute="Splash"
        screenOptions={{
          headerShown:false
        }}
        
        
        >
          <Stack.Screen name="Splash" component={Splash}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Donate" component={Donate}/>
          <Stack.Screen name="Success" component={Success}/> 
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});