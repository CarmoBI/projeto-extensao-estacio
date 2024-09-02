import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import api from '../services/api';

const ProdutoForm = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [fornecedorId, setFornecedorId] = useState('');

    const cadastrarProduto = async () => {
        try {
            const response = await api.post('/produtos', {
                nome,
                preco: parseFloat(preco),
                fornecedorId: parseInt(fornecedorId),
            });

            if (response.status === 201) {
                Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
                setNome('');
                setPreco('');
                setFornecedorId('');
            } else {
                Alert.alert('Erro', 'Falha ao cadastrar produto.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro na comunicação com a API.');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome do Produto:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Nome do Produto"
            />
            <Text style={styles.label}>Preço:</Text>
            <TextInput
                style={styles.input}
                value={preco}
                onChangeText={setPreco}
                placeholder="Preço"
                keyboardType="numeric"
            />
            <Text style={styles.label}>ID do Fornecedor:</Text>
            <TextInput
                style={styles.input}
                value={fornecedorId}
                onChangeText={setFornecedorId}
                placeholder="ID do Fornecedor"
                keyboardType="numeric"
            />
            <Button title="Cadastrar Produto" onPress={cadastrarProduto} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
});

export default ProdutoForm;
