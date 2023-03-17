import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Quote } from '../../model/quote'
import ListSeparator from './list-separator'
import QuoteItem from './quote-item'

export default function QuoteListView({ quotes }: { quotes: Quote[] }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={quotes}
                renderItem={({ item }) => <QuoteItem quote={item}></QuoteItem>}
                ItemSeparatorComponent={ListSeparator}
                contentInsetAdjustmentBehavior="automatic"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
