import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.seufornecedor.com', // Substitua pelo URL da API do fornecedor
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;


import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ProdutoForm from './components/ProdutoForm';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Cadastro de Produtos</Text>
            <ProdutoForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
});
