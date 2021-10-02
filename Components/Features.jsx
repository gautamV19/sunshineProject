import React from 'react';
import Cards from './ParametersList';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';
import products from '../utils/products.json'


//Function component
function Product({ showGraph, data, showmap }) {
    return (
        <ScrollView>
            <View style={styles.headerBox}>
                <Button title="Choose New location" style={styles.btn} onPress={()=>{showmap(true)}}></Button>
            </View>
            <View>
                <Text style={styles.pageHeader}>Parameters</Text>
            </View>
            {products.map(function func(i) {
                return (
                    <Cards key={i.param} name={i.title} discription={i.discription} src={i.src} data={data[i.param]} showGraph={showGraph} />
                )
            })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: "wheat",
        borderRadius: 10,
        borderStyle: "solid",
        margin: 10,
        padding: 10,
    },
    pageHeader: {
        fontSize: 40,
        textAlign: "center",
        textDecorationColor: "white",
        paddingRight: 10,
        paddingLeft: 5
    },
    btn : {
        margin: 10,
    }
})
export default Product;
