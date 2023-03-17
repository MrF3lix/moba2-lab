import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import QuoteListView from '../views/quotes-list/quotes-list-view'
import sampleQuoteResponse from '../model/SampleQuoteResponse.json'
import { QuoteResponse } from '../model/quote'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function DetailScreen() {
    const sampleResponse: QuoteResponse = sampleQuoteResponse
    const insets = useSafeAreaInsets()

    return (
        <View style={styles.container}>
            <QuoteListView quotes={sampleResponse._embedded.quotes}></QuoteListView>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
