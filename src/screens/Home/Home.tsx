import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ProductCardList from "../../components/ProductCardList/ProductCardList";
import { ALL_PRODUCTS_QUERY } from "../../GraphqlQueries/HomeScreenQueries";
import { useDispatch } from "react-redux";
import { setScreen } from "../../slices/activeScreenSlice";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../types/StackParamList";
import { Checkbox } from "react-native-paper";
import DynamicFilter from "../../components/DynamicFilter/DyanamicFilter";
import FilterModal from "../../components/Filter/Filter";

const vendors = ["Sunrise trade", "Xyx Vendor", "Vendor 3"];

type Props = StackScreenProps<StackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
    const filters = [
        { productVendor: "Another Vendor" },
        { productVendor: "Third Vendor" },
        { productVendor: "Sunrise trade" },
        {available: false},
        { price: { min: 5, max: 40}},
        {available: true},
    ]
    const { data: products, error, loading, refetch } = useQuery(ALL_PRODUCTS_QUERY, {variables: {
        filters: []
    }});
    const [filterVisible, setFilterVisible] = useState<boolean>(false);
    const [availableFilters, setAvailableFilters] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState<string>("");

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setScreen("Home"));
    }, []);

    const handleVendorChange = (value: string) => {
        setSelectedVendor(prev => (prev === value ? "" : value));
    };

    const handleFilterChange = (filter: any, isPriceChange = false) => {
        setSelectedFilters(prev => {
            if (isPriceChange) {
                const updatedFilters = prev.filter((item )=> {
                    const parsedItem = JSON.parse(item)
                    if(parsedItem.price) {
                        return false;
                    }
                    return item;
                });
    
                if (filter) {
                    return [...updatedFilters, filter];
                } else {
                    return updatedFilters;
                }
            }
    
            const isExist = prev.includes(filter);
            if (isExist) {
                return prev.filter(value => value !== filter);
            } else {
                return [...prev, filter];
            }
        });
    };
    
    
    const handleClearFilter = async()=> {
        // console.log("Clear Filter Trigerred:");
        setSelectedFilters([]);
        setFilterVisible(false);
        const {data, error} = await refetch({filters: []});
    }

    const handleApplyFilter = async()=> {
        try {
            setFilterVisible(false);
            const parsed = selectedFilters.map((value)=>{
                return JSON.parse(value);
            })
            console.log("Selected Filter: ", parsed);
            const {data, error} = await refetch({filters: parsed});
            console.log("Data: ", data, error);
        } catch (error) {
            console.log("An error occurred: ", error);  
        }
    }

    useEffect(() => {
        // console.log("Products: ", products);
        if(products?.collectionByHandle?.products.filters) {
            const filters = products?.collectionByHandle?.products.filters;
            // console.log("Filters: ", filters)
            setAvailableFilters(filters);
        }
    }, [products]);

    return (
        <View style={styles.container}>
            {loading && <Text>Loading....</Text>}
            {/* <View>
                <Text>Select Vendors:</Text>
                {vendors.map((value) => (
                    <View key={value} style={{ flexDirection: "row", alignItems: "center" }}>
                        <Checkbox
                            status={selectedVendor === value ? "checked" : "unchecked"}
                            onPress={() => handleVendorChange(value)}
                        />
                        <Text>{value}</Text>
                    </View>
                ))}
                <TouchableOpacity onPress={handleApplyFilter}>
                    <Text>Apply Filter</Text>
                </TouchableOpacity>
            </View> */}
            {availableFilters.length>0 && <TouchableOpacity onPress={()=>setFilterVisible(true)}>
                    <Text>Show Filters</Text>
                </TouchableOpacity>}
            {!loading && products?.collectionByHandle?.products.edges.length > 0 && (
                <ProductCardList 
                    data={products.collectionByHandle.products.edges} 
                    title={"Products"} 
                />
            )}
             <FilterModal
                visible={filterVisible}
                setModalVisible={setFilterVisible}
                availableFilters={availableFilters}
                selectedFilters={selectedFilters}
                setSelectedFilter={handleFilterChange}
                clearFilter={handleClearFilter}
                applyFilters={handleApplyFilter}
            />
        </View>
    );
}