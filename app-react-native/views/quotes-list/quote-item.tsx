import { View, Text, StyleSheet } from 'react-native'
import type { Quote } from '../../model/quote'

export default function QuoteItem({ quote }: { quote: Quote }) {
    function parseDate(dateString: string): string {
        const date = new Date(dateString)
        return date.toLocaleDateString()
    }

    const date = parseDate(quote.appeared_at)

    return (
        <View style={styles.container}>
            <Text style={styles.value}>
                <Text style={styles.quotes}>“ </Text>
                {quote.value}
                <Text style={styles.quotes}> ”</Text>
            </Text>
            <Text style={styles.date}>— {date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    value: {
        fontFamily: 'Lora-Medium',
        fontSize: 18,
    },
    date: {
        fontFamily: 'Inter-SemiBold',
        fontSize: 16,
        textAlign: 'right',
        color: 'gray',
        paddingTop: 4,
    },
    quotes: {
        fontFamily: 'Lora-SemiBold',
        color: 'lightgray',
    },
})
