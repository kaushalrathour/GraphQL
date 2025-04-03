import { ScaledSheet as StyleSheet } from "react-native-size-matters"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0.1,
        margin: "5@vs",
        borderRadius: "10@ms",
        backgroundColor: "#D3D3D3"
    },
    imageContainer: {
        width: "100%",
        height: "180@vs",
        borderRadius: "10@ms"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: "10@ms"
    },
    stockContainer: {
        position: "absolute",
        right: "10@s",
        top: "10@vs",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: "5@s",
        paddingVertical: "5@vs",
        backgroundColor: "#ff8e00",
        borderRadius: "4@ms",
        gap: "5@ms"
    },
    body: {
        paddingHorizontal: "10@s",
        paddingVertical: "15@vs",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    title: {
        fontSize: "12@ms",
        fontWeight: "600"
    },
    subtitle: {
        fontSize: "10@ms",
        fontWeight: "600"
    },
})