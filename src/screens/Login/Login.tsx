import { Text, View } from "react-native"
import { ms, ScaledSheet as StyleSheet } from "react-native-size-matters"
import { StackParamList } from "../../types/StackParamList"
import { StackScreenProps } from "@react-navigation/stack"
import { useEffect } from "react"
import { setScreen } from "../../slices/activeScreenSlice"
import { styles } from "./styles"
import { useDispatch } from "react-redux"

type Props = StackScreenProps<StackParamList, "Login">

const LoginScreen = ({navigation}: Props): React.JSX.Element =>{
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(setScreen("Login"));
        },[navigation]);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
        </View>
    )
}

export default LoginScreen;
