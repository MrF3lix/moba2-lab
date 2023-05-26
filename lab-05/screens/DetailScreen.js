import { useEffect, useReducer, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/elements'
import { StatusBar, TextInput, Text, StyleSheet, View, Pressable, KeyboardAvoidingView } from 'react-native';
import KeyboardHidingView from '../helpers/KeyboardHidingView';
import { getWeatherData } from '../WeatherService';


const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FORECAST':
            return {
                ...state,
                forecast: action.value
            }
    }
}

const celsius = val => (val - 273.15).toFixed(2)

export const DetailScreen = ({ route }) => {
    const searchLocation = route.params.location
    const safeAreaInsets = useSafeAreaInsets()
    const headerHeight = useHeaderHeight()
    const [state, dispatch] = useReducer(reducer, { forecast: undefined });

    useEffect(() => {
        getWeatherData(searchLocation).then(value => dispatch({ type: 'UPDATE_FORECAST', value }))
    }, [])

    console.log(state?.forecast)

    return (
        <KeyboardHidingView>
            <KeyboardAvoidingView
                style={{
                    ...styles.container,
                    marginTop: safeAreaInsets.top + headerHeight,
                    marginBottom: safeAreaInsets.bottom,
                    marginLeft: safeAreaInsets.left,
                    marginRight: safeAreaInsets.right,
                }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.wrapper}>
                    <Text style={styles.detail}>{searchLocation.name}</Text>
                    <Text style={styles.detail}>🌤️ {celsius(state.forecast?.current?.temp)} °C</Text>
                </View>
                <StatusBar style="auto" />
            </KeyboardAvoidingView>
        </KeyboardHidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '100%',
    },
    detail: {
        fontSize: 48,
        textAlign: 'center',
    }
})
