import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
    return (
        <View style={{ flex: 1, flexDirection: "row", marginTop: 25, backgroundColor: "lightblue", marginBottom: 25, alignItems: "center", justifyContent: "center", height: 80 }}>
            <View style={{ width: 200, backgroundColor: "white" }}>
                <TextInput autoCompleteType="email" label="Email"></TextInput>
            </View>
        </View>
    );
}

