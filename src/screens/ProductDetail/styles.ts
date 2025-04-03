import { ScaledSheet as StyleSheet } from "react-native-size-matters"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: "15@s",
        paddingVertical: "10@vs"
    },
    imageContainer: {
        height: "400@vs",
        width: "100%",
        borderRadius: "10@ms"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: "10@ms"
    },
    body: {
        paddingHorizontal: "10@s",
        paddingVertical: "5@vs",
        gap: "5@vs"
    },
    title: {
        fontSize: "16@ms",
        fontWeight: "600",
        color: "#000"
    },
    description: {
     textAlign: "justify",
     color: "grey"  
    },
    timeContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    time: {
        fontStyle: "italic" 
    },
    vendor: {
        fontSize: "16@ms",
        fontWeight: "600",
    },
    relatedProducts: {
        height: "300@vs"
    },
    tagsContainer: {
        flexDirection: "row",
        gap: "5@ms"
    },
    tagText: {
        backgroundColor: "grey",
        padding: "3@ms",
        borderRadius: "5@ms"
    }
})