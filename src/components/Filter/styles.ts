import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
    },
    scrollView: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    filterContainer: {
        marginBottom: 15,
    },
    filterLabel: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
    },
    priceLabel: {
        fontSize: 16,
        marginTop: 5,
    },
    closeButton: {
        width: "50%",
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    applyButton: {
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        alignItems: 'center',
    },
    clearButton: {
        padding: 10,
        backgroundColor: '#f44336',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    priceRangeLabel: {

    },
    priceRangeItem: {
        marginBottom: 10,
        borderRadius: 5,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    },
});
