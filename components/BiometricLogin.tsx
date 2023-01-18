import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication'

export function BiometricLogin() {
    const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        async function authenticate() {
            const result = await LocalAuthentication.authenticateAsync();
            setUserAuthenticated(result.success);
        }

        authenticate();
    }, [])

    return (
        <View style={styles.container}>
            <Text>{String(userAuthenticated)}</Text>
            <StatusBar style="auto" />
        </View>
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
