import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../types/StackParamList";
import { useQuery , useLazyQuery} from "@apollo/client";
import { PRODUCT_QUERY, TAGS_QUERY } from "../../GraphqlQueries/ProductDetailQuery";
import Swiper from "react-native-swiper";
import ProductCardList from "../../components/ProductCardList/ProductCardList";
import { useEffect } from "react";
import { ALL_PRODUCTS_QUERY } from "../../GraphqlQueries/HomeScreenQueries";
import { ms } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { setScreen } from "../../slices/activeScreenSlice";
type Props = StackScreenProps<StackParamList, "ProductDetail">
export default function ProductDetailScreen ({navigation, route}: Props) {
    const { handle } = route.params;
    const {loading, data, error} = useQuery(PRODUCT_QUERY,{variables:{handle}});
    const {loading: allProductLoading, data: products} = useQuery(ALL_PRODUCTS_QUERY);
    const [getTags, {data: tagsData, loading: tagsLoaidng}] = useLazyQuery(TAGS_QUERY);
    // console.log(tagsData);
    const dispatch = useDispatch();
    useEffect(()=>{
                dispatch(setScreen(""));
            },[navigation]);
    return(
        <View style={styles.container}>
            <ScrollView>
            {!loading &&
            <View style={styles.imageContainer}>
            <Swiper autoplay showsButtons={false}>
            {data.productByHandle.images.edges.map((image: any, index: any)=>(
                <Image source={{uri: image.node.url}} style={styles.image} key={image}/>
            ))}
            </Swiper>
            <View style={styles.body}>
            <Text style={styles.title}>{data.productByHandle.title}</Text>
            <Text style={styles.description}>{data.productByHandle.description}</Text>
            <View style={styles.timeContainer}>
                <Text style={styles.time}>Published At: {new Date(data.productByHandle.publishedAt).toLocaleDateString("en-IN")}</Text>
                <Text style={styles.time}>Updated At: {new Date(data.productByHandle.updatedAt).toLocaleDateString("en-IN")}</Text>
            </View>
            <Text style={styles.vendor}>Vendor: {data.productByHandle.vendor}</Text>
            <TouchableOpacity onPress={()=>{
                getTags({variables:{handle}});
            }} style={{alignSelf: "center", backgroundColor: "#D3D3D3", padding: ms(5), borderRadius: ms(5)}}>
                <Text style={{fontWeight: "600"}}>Get Tags</Text>
            </TouchableOpacity>
            {tagsData && <View style={styles.tagsContainer}>
            {!tagsLoaidng && tagsData && 
                tagsData.productByHandle.tags.map((tag: any, index: any)=>{
                    return(
                    <Text key={index} style={styles.tagText}>{tag}</Text>
                )
                })
            }
            </View>
            }
            </View>
            </View>
            }
            {!allProductLoading  && products &&  
                <View style={styles.relatedProducts}>
                <ProductCardList data={products.products.edges.slice(1, 7)} title={"Related Products: "} horizontal={true}/>
                </View>
            }
            </ScrollView>
        </View>
    )
}