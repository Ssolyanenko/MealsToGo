import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {StatusBar, SafeAreaView, Text, View,} from 'react-native';

export default function App() {
    return (
        <>
            <ExpoStatusBar style='auto'/>
            <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight }}>
                <View style={{backgroundColor: 'green', padding: 16}}>
                    <Text>
                        Search
                    </Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'blue', padding: 16}}>
                    <Text>
                        List
                    </Text>
                </View>
            </SafeAreaView>
        </>
    );
}

