import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProdutosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Seja Bem Vindo {'\n'}à tela de Produtos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',  
  },
  title: {
    fontSize: 38,  
    fontWeight: 'bold',  
    textAlign: 'center',  
    marginHorizontal: 20,  
    lineHeight: 40,  
  },
});
