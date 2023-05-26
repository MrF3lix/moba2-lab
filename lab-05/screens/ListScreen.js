import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/elements'
import { FlatList, StatusBar, Text, StyleSheet, View, Pressable, KeyboardAvoidingView } from 'react-native';
import KeyboardHidingView from '../helpers/KeyboardHidingView';
import { useEffect, useReducer } from 'react';
import { getLocation } from '../WeatherService';


const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_LOCATIONS':
            return {
                ...state,
                locations: action.value
            }
    }
}

export const ListScreen = ({ route, navigation }) => {
    const searchQuery = route.params.query
    const safeAreaInsets = useSafeAreaInsets()
    const headerHeight = useHeaderHeight()
    const [state, dispatch] = useReducer(reducer, { locations: [] });

    useEffect(() => {
        getLocation(searchQuery, 100).then(value => dispatch({ type: 'UPDATE_LOCATIONS', value }))
    }, [])

    console.log(state.forecast?.current?.temp)

    const viewDetail = (location) => navigation.navigate('Detail', { location })

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
                <FlatList
                    style={styles.list}
                    data={state?.locations}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => viewDetail(item)}>
                           <View style={{ ...styles.itemContainer, marginLeft: safeAreaInsets.left, marginRight: safeAreaInsets.right }}>
                                <Text style={styles.value}>
                                    {item.name}
                                </Text>
                                <Text style={styles.desc}>{item.country}, {item.state}</Text>
                            </View>
                        </Pressable>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ paddingLeft: safeAreaInsets.left, paddingRight: safeAreaInsets.right }}>
                            <View style={styles.sepContainer} />
                        </View>
                    )}
                    contentInsetAdjustmentBehavior="automatic"
                />
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
    sepContainer: {
        marginHorizontal: 16,
        backgroundColor: 'lightgray',
        height: 1,
    },
    list: {
        width: '100%',

    },
    itemContainer: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    value: {
        fontSize: 18,
    },
    desc: {
        fontSize: 16,
        color: 'gray',
        paddingTop: 4,
    },
    quotes: {
        color: 'lightgray',
    },
})
