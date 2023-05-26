import { useReducer, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useHeaderHeight } from '@react-navigation/elements'
import { StatusBar, TextInput, Text, StyleSheet, View, Pressable, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import KeyboardHidingView from '../helpers/KeyboardHidingView';

export const SearchScreen = ({ navigation }) => {
    const [text, setText] = useState('')
    const safeAreaInsets = useSafeAreaInsets()
    const headerHeight = useHeaderHeight()

    const submit = () => navigation.navigate('List', { query: text })

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
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={setText}
                        placeholder="Search Location, City or Place Name"
                        onSubmitEditing={submit}
                        returnKeyType="search"
                    />
                    <Pressable onPress={submit} style={styles.button}>
                        <Feather name="search" size={24} style={styles.buttonContent} />
                    </Pressable>
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
    searchWrapper: {
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
        maxWidth: 240,
        margin: 0,
        padding: 8,
        fontSize: 18
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        margin: 4,
        borderRadius: 10,
    },
    buttonContent: {
        color: 'white',
        padding: 10,
    },
})
