import { View, StyleSheet } from 'react-native'

export default function ListSeparator() {
    return <View style={styles.container} />
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        backgroundColor: 'lightgray',
        height: 1,
    },
})
