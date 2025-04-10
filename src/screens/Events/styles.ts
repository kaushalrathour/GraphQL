import { ScaledSheet as StyleSheet } from "react-native-size-matters"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    text: {
        fontSize: "30@ms",
        fontWeight: "600"
    }
})