import { Text, View } from "react-native"
import { ms, ScaledSheet as StyleSheet } from "react-native-size-matters"
import { StackParamList } from "../../types/StackParamList"
import { StackScreenProps } from "@react-navigation/stack"
import { useEffect } from "react"
import { setScreen } from "../../slices/activeScreenSlice"
import { styles } from "./styles"
import { useDispatch } from "react-redux"

type Props = StackScreenProps<StackParamList, "Play">

const PlayScreen = ({navigation}: Props): React.JSX.Element =>{
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(setScreen("Play"));
        },[navigation]);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Play Screen</Text>
        </View>
    )
}

export default PlayScreen;
