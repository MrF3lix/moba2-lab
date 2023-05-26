import { useEffect, useReducer } from 'react';
import {getWeatherData} from './WeatherService'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { SearchScreen } from './screens/SearchScreen';
import { ListScreen } from './screens/ListScreen';
import { DetailScreen } from './screens/DetailScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider style={styles.safearea}>
                <NavigationContainer st>
                    <Stack.Navigator
                        screenOptions={{
                            headerLargeTitle: true,
                        }}
                    >
                        <Stack.Screen name="Search" component={SearchScreen} />
                        <Stack.Screen name="List" component={ListScreen} />
                        <Stack.Screen name="Detail" component={DetailScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safearea: {
    width: '100%'
  }
});
