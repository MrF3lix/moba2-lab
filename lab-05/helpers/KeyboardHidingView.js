import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native'

export default function KeyboardHidingView({ children }) {
    return Platform.OS !== 'web' ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
    ) : (
        <>{children}</>
    )
}
