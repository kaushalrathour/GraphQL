import { ScaledSheet as StyleSheet } from "react-native-size-matters"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "15@s",
        paddingVertical: "10@vs",
        backgroundColor: "#FFDDAB"
    },
    text: {
        fontSize: "30@ms",
        fontWeight: "600"
    },
    loadingContainer: {
        gap: "10@vs"
    },
    loadingText: {
        fontWeight: "500",
        fontSize: "16@ms"
    },
    
})