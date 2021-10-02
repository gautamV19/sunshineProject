import React from 'react';
import { Button, View, BackHandler } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
const GraphModal = ({ graphState, setGraphState }) => {
    const handleClose = () => {
        setGraphState(false);
    };
    BackHandler.addEventListener('hardwareBackPress', function () {
        setGraphState(false);
        return true;
    })
    return (
        <View>
            <Button title="close" onPress={handleClose} />
            <VictoryChart width={350} theme={VictoryTheme.material}>
                <VictoryBar data={graphState} x="time" y="value" />
            </VictoryChart>
        </View>
    )
}

export default GraphModal;