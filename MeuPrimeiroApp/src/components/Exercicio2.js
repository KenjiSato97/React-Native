import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const Exercicio2 = () => {

    const [contador, setcontador] = useState(0)
    function incrementar(){
        setcontador(contador + 1)
    }
    function decrementar(){
        setcontador(contador - 1)
    }

  return (
    <View style={styles.container}>
        <Button title='-' onPress={decrementar}/>
        <Text>Contador:{contador}</Text>
        <Button title='+' onPress={incrementar}/>
      <Text>Exercicio2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
    },
})

export default Exercicio2