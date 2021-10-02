import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import GetLocation from 'react-native-get-location'
export const MapModal = ({ mode, callback }) => {
    const handlePress = (e)=>{
        const pos = {
            lat : e.nativeEvent.coordinate.latitude, 
            lng: e.nativeEvent.coordinate.longitude
        }
        callback(pos);
    }
    BackHandler.addEventListener('hardwareBackPress', function () {
        callback(null);
    })
    const handleClick = ()=>{
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(location => {
            const pos = {
                lat: location.latitude,
                lng: location.longitude
            }
            callback(pos);
        }).catch(error => {
            
        })
    }
    return (
        <View style={mode ? styles.container : styles.nodisplay}>
            <View style={styles.mapHolder}>
                <Text style={styles.heading}>Choose Your Location</Text>
                <MapView style={styles.map}
                    onPress = {handlePress}
                    initialRegion={{
                        latitude: 38,
                        longitude: -95,
                        latitudeDelta: 45,
                        longitudeDelta: 10,
                    }}
                />
                <Button title="Choose My Current Location" style={styles.btn} onPress={handleClick}></Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    map: {
        height: '80%',
        width: '100%',
    },
    nodisplay: {
        display: 'none'
    },
    container: {
        backgroundColor: '#00000088',
        position: 'absolute',
        height: "100%",
        width: "100%",
    },
    mapHolder: {
        backgroundColor: '#fff',
        margin: "5%",
        padding: "5%",
        height: "55%",
        marginTop: "35%",
    },
    heading: {
        textAlign: "center",
        fontSize: 20,
    },
    btn: {
        fontSize: 20,
    },
});