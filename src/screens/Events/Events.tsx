import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StackParamList } from "../../types/StackParamList";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { setScreen } from "../../slices/activeScreenSlice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { alphabetArray } from "../../alphabetArray";
import { Checkbox } from "react-native-paper";

type Props = StackScreenProps<StackParamList, "Events">;

const EventsScreen = ({ navigation }: Props): React.JSX.Element => {
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]); // Change to hold objects

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setScreen("Events"));
    }, [navigation]);

    useEffect(() => {
        // console.log("Selected Options: ",selectedOptions)
    }, [selectedOptions]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Events Screen</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-evenly" }}>
                    {alphabetArray.map((item, index) => {
                        const isSelected = selectedOptions.includes(item);
                        return (
                            <View style={{ alignItems: "center", flexDirection: "row" }} key={index}>
                                <Text style={{ color: "black" }}>{Object.keys(item)[0]}</Text>
                                <Checkbox
                                    status={isSelected ? "checked" : "unchecked"}
                                    onPress={() => {
                                        if (isSelected) {
                                            setSelectedOptions((prev) => prev.filter((value) => value !== item));
                                        } else {
                                            setSelectedOptions((prev) => [...prev, item]); 
                                        }
                                    }}
                                />
                            </View>
                        );
                    })}
                </View>
                <TouchableOpacity onPress={() => {
                    let query = "";
                    selectedOptions.forEach((value, index) => {
                        if(index===0) {
                            query += JSON.stringify(value)
                        }
                        else {
                            query +=" " + JSON.stringify(value)
                        console.log("Query: ", query);
                        }
                    });
                    query = query.replaceAll(" ", "AND")
                    // console.log("Query: ", query);
                }}>
                    <Text>Apply Filters</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default EventsScreen;
