import DetailScreen from './screens/detail-screen'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

export default function App() {
    const [fontsLoaded] = useFonts({
        'Lora-Medium': require('./assets/fonts/Lora/Lora-Medium.ttf'),
        'Lora-SemiBold': require('./assets/fonts/Lora/Lora-Medium.ttf'),
        'Inter-SemiBold': require('./assets/fonts/Inter/Inter-SemiBold.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Quotes 🤡🍊"
                            component={DetailScreen}
                            options={{
                                headerLargeTitle: true,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})
