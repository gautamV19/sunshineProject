import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapModal } from './Components/MapModal'
import  GraphModal  from "./Components/GraphModal"
import { daily, monthly } from './utils/solarFlux.js'
import Products from './Components/Features.jsx'
import params from './utils/params'
export default function App() {
  const [mapModalState, setMapModalState] = React.useState(true)
  const [graphModalState, setGraphModalState] = React.useState(false)
  const [location, setLocation] = React.useState({ lng: null, lat: null })
  const [data, setData] = React.useState(null)
  const handleLocation = (location) => {
    if (location=== null) return;
    setMapModalState(false);
    setLocation(location)
  }
  time = {
    s: 20210901, e: 20210909,
  }
  React.useEffect(() => {
    if (!(location.lat === null || location.lng === null)) {
      daily(params, location, time).then((data) => {
        console.log(data)
        setData(data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [location])
  return (
    <View style={styles.container}>
      <MapModal mode={mapModalState} callback={handleLocation}></MapModal>
      {
        (!mapModalState && !graphModalState) &&
        (data ? <Products showGraph={setGraphModalState} data={data} showmap={setMapModalState}></Products> : <Text>Loading...</Text>)
      }
      {
        graphModalState && <GraphModal graphState={graphModalState} setGraphState={setGraphModalState}></GraphModal>
      }
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
