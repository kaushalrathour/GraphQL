import { Text, View } from "react-native"
import { StackParamList } from "../../types/StackParamList"
import { StackScreenProps } from "@react-navigation/stack"
import { useEffect } from "react"
import { setScreen } from "../../slices/activeScreenSlice"
import { styles } from "./styles"
import { useDispatch } from "react-redux"

type Props = StackScreenProps<StackParamList, "Events">

const EventsScreen = ({navigation}: Props): React.JSX.Element =>{
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(setScreen("Events"));
        },[navigation]);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Events Screen</Text>
        </View>
    )
}

export default EventsScreen;
