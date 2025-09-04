import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio4 = () => {
    const itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
  return (
    <View style={styles.container}>
      {itens.map((item, index) => (
        <Text key={index} style={styles.item}>{item}</Text>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
    },
    item: {
        fontSize: 18,
        marginVertical: 5,
    },
})
export default Exercicio4