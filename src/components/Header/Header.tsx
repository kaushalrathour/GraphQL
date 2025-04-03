import { Text, View } from "react-native"
import { ms, ScaledSheet as StyleSheet } from "react-native-size-matters"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"

const Header = (): React.JSX.Element => {
    return(
        <View style={styles.container}>
        <View style={styles.headerLeft}>
        <MaterialIcon name="location-on" size={ms(30)} color={"#56b918"}/>
        <View style={styles.headerLeftBody}>
        <Text style={styles.headerTitle}>Seventh Triangle - Sector-1, Noida</Text>
        <Text style={styles.headerSubtitle}>Seventh Triangle - Sector-1, Noida</Text>
        </View>
        </View>
        <View style={styles.headerRight}>
        <MaterialIcon name="apps" size={ms(30)} color={"#818589"}/>
        </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "10@s",
        paddingVertical: "15@ms"
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerLeftBody: {

    },
    headerTitle: {
        fontSize: "16@ms",
        color: "#383838"
    },
    headerSubtitle: {
        fontSize: "10@ms",
        color: "#A9A9A9"
    },
    headerRight: {

    },
})