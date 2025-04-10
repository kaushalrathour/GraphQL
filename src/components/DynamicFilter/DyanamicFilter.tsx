import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, View } from "react-native";
import { Checkbox as CheckBox } from "react-native-paper";

type Props = {
    id: "filter.v.availability" | "filter.v.price" | "filter.p.vendor" | "filter.v.t.shopify.color-pattern" | string;
    label: string;
}

export default function DynamicFilter({ id, label }: Props) {
  
   return(
    <View>
        <Text>{label}</Text>
        
    </View>
   )
}
