import { View, TextInput, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Exercicio3 = () => {

    const [texto, setTexto] = useState('')
    function capturarTexto(entrada){
        setTexto(entrada)
    }
    return (
    <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder='Digite algo aqui'
        onChangeText={capturarTexto}
        />
        <Text>Você digitou: {texto}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
})
export default Exercicio3