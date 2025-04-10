import { Fragment, useEffect, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { styles } from "./styles";

type Props = {
    visible: boolean;
    setModalVisible: (value: boolean) => void; 
    availableFilters: any[];
    selectedFilters: any[]; 
    setSelectedFilter: (filter: any) => void;
    clearFilter: () => void;
    applyFilters: () => void;
};

const priceRanges = [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 - $500", min: 200, max: 500 },
    { label: "Over $500", min: 500, max: Infinity }
];

export default function FilterModal({ visible, setModalVisible, availableFilters, clearFilter, selectedFilters, setSelectedFilter, applyFilters }: Props) {
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const handlePriceRange = (priceRange) => {
        // console.log("Price Range Handler: ", priceRange);
        const isExist = selectedPriceRanges.includes(priceRange);
        // console.log("is exist: ", isExist);
        setSelectedPriceRanges(pre => {
            if (isExist) {
                return pre.filter(item => item !== priceRange);
            } else {
                return [...pre, priceRange];
            }
        });
        // console.log("Price Range: ", priceRange);
        
    };
    useEffect(()=>{
        if(selectedPriceRanges.length>0) {
            const min = Math.min(...selectedPriceRanges.map(range => range.min));
            const max = Math.max(...selectedPriceRanges.map(range => range.max));
        
            const price = {price: {min, max}};
            // console.log("Selected Price Ranges", selectedPriceRanges);
            console.log("Price Object", price);
            setSelectedFilter(JSON.stringify(price), true);
        }else {
            setSelectedFilter(null, true) 
        }
    },[selectedPriceRanges])
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <Text style={styles.title}>Filters</Text>
                    {availableFilters.map((filter, index) => {
                        // console.log("Filter: ", filter);
                        const values = filter.values;
                        if (filter.type === "LIST") {
                            if (filter.label === "Color") {
                                return <Fragment key={index} />;
                            }
                            return (
                                <View key={index} style={styles.filterContainer}>
                                    <Text style={styles.filterLabel}>{filter.label}</Text>
                                    {Array.isArray(values) && values.map((value, index2) => {
                                        const inputValue = values[index2].input;
                                        const isSelected = selectedFilters.includes(inputValue);
                                        return (
                                            <View key={index2} style={styles.checkboxContainer}>
                                                <Checkbox
                                                    status={isSelected ? "checked" : "unchecked"}
                                                    onPress={() => { setSelectedFilter(inputValue); }}
                                                />
                                                <Text style={styles.checkboxLabel}>{value.label}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            );
                        } else if (filter.type === "PRICE_RANGE") {
                            return (
                                <View key={index} style={styles.filterContainer}>
                                    <Text style={styles.filterLabel}>Price Range</Text>
                                    {priceRanges.map((item, index)=>{
                                        const exist = selectedPriceRanges.includes(item);
                                        const backgroundColor = exist? "grey" : "pink"
                                        return(
                                            <TouchableOpacity onPress={()=>{handlePriceRange(item)}} style={[styles.priceRangeItem, {backgroundColor}]}>
                                                <Text style={styles.priceRangeLabel}>{item.label}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            );
                        } else {
                            return <Fragment key={index} />;
                        }
                    })}
                    <TouchableOpacity onPress={() => { setModalVisible(false); }} style={styles.closeButton}>
                        <Text style={[styles.buttonText]}>Close</Text>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={applyFilters} style={styles.applyButton}>
                            <Text style={styles.buttonText}>Apply Filters</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            setSelectedPriceRanges([]);
                            clearFilter()
                        }} style={styles.clearButton}>
                            <Text style={styles.buttonText}>Clear Filter</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
}

