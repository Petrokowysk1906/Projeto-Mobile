// pages/HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ route, navigation }) {
    const { username, password } = route.params || {};

    useEffect(() => {
        console.log('Tela Home carregada');
    }, [username, password]);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Seja Bem Vindo{'\n'}Petrokowysk</Text>
            <Image source={require('../assets/imghome.png')} style={styles.logo} />
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#8B4513' }]}
                onPress={() => navigation.navigate('Produtos')}
            >
                <Text style={styles.buttonText}>PRODUTOS</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#8B4513' }]}
                onPress={() => navigation.navigate('Perfil')}
            >
                <Text style={styles.buttonText}>PERFIL</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#FFFFFF',
    },
    welcomeText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
        marginBottom: 1,
    },
    button: {
        padding: 25,
        marginVertical: 10,
        borderRadius: 30,
        width: '70%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
