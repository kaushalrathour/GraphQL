import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome6"
import { useNavigation } from "@react-navigation/native";
import { StackNavigatorProps } from "@react-navigation/stack";
import { StackParamList } from "../../types/StackParamList";

export default function ProductCard ({product}: any) {
    // console.log("Inside Product Card", product.node);
    const navigation = useNavigation<StackNavigatorProps<StackParamList>>();
    return(
        <TouchableOpacity style={styles.container} onPress={()=>{
            navigation.push("ProductDetail", {
                handle: product.node.handle
            })
        }} activeOpacity={0.8}>
            <View style={styles.imageContainer}>
                <Image source={{uri: product.node.images.edges[0].node.url}} style={styles.image}/>
                <View style={styles.stockContainer}>
                    <Icon name={product.node.availableForSale? "face-grin-hearts" : "face-sad-tear"}/>
                    <Text>{product.node.availableForSale? "Available": "Out of Stock"}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.title} numberOfLines={1}>{product.node.title}</Text>
                <Text style={styles.subtitle}>{`Price: ${product.node.priceRange.maxVariantPrice.currencyCode} ${product.node.priceRange.maxVariantPrice.amount}`}</Text>
            </View>
        </TouchableOpacity>
    )
}