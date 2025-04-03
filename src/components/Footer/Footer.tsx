import React, { useEffect } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { ms, ScaledSheet as StyleSheet } from "react-native-size-matters"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { useSelector } from "react-redux"
import { useNavigation } from '@react-navigation/native';
import { ActiveScreen } from "../../types/ActiveScreen"

const footerContent = [
    {
        label: "Home",
        icon: "home"
    },
    {
        label: "Events",
        icon: "emoji-events"
    },
    {
        label: "Play",
        icon: "add-box"
    },
    {
        label: "Explore",
        icon: "explore"
    },
    {
        label: "Login",
        icon: "person"
    }
]

const Footer = ()=>{
    const { screenName }: ActiveScreen = useSelector((state: any)=> state.activeScreen);
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
        {footerContent.map((item, index)=>(
            <TouchableOpacity style={styles.button} key={index} onPress={()=>{
               navigation.navigate(item.label);
            }}>
            <MaterialIcon name={item.icon} size={ms(30)} color={screenName === item.label ? "#56b918": "#818589"}/>
            <Text style={[screenName === item.label? styles.activeButtonText : styles.inactiveButtonText]}>{item.label}</Text>
            </TouchableOpacity>
        ))}
        </View>
    )
}


export default Footer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "10@s",
        paddingVertical: "10@ms",
        borderRadius: "15@ms"
    },
    button: {
        alignItems: "center"
    },
    activeButtonText: {
        color: "#56b918"
    },
    inactiveButtonText: {

    }
})