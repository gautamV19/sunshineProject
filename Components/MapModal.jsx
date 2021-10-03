import React from 'react';
import { StyleSheet, Text, View, Pressable, BackHandler } from 'react-native';
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
                <Pressable style={styles.btn} onPress={handleClick}>
                    <Text style={styles.currentLocation}>Choose My Current Location</Text>
                </Pressable>
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
        shadowColor: "#000000",
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
        textDecorationColor: "#000000",
        fontWeight: "bold",
        margin: 5,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#000000',
    },
    currentLocation:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#ffff00',
    },
});