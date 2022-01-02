import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function Screen1() {
  return (
    <View style={styles.container}>
      <Text>Move to the other top tab</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.container}>
      <Text>Move to other bottom tab</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.container}>
      <Text>I will dissappear shortly</Text>
      <Text>(if you came from the second top tab)</Text>
    </View>
  );
}

const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <TopTab.Navigator initialRouteName="Screen1">
      <TopTab.Screen component={Screen1} name="Screen1" />
      <TopTab.Screen component={Screen2} name="Screen2" />
    </TopTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator labeled shifting={false} initialRouteName="Screen3">
        <BottomTab.Screen component={TopTabs} name="TopTabs" />
        <BottomTab.Screen component={Screen3} name="Screen3" />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
