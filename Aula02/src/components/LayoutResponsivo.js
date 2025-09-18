import { View, Text, StyleSheet } from 'react-native'

const LayoutResponsivo = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
         <Text>Cabeçalho</Text>   
        </View>
        <View style={styles.main}>
         <Text>Conteudo principal</Text>   
        </View>
        <View style={styles.footer}>
         <Text>Rodapé</Text>   
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {flex: 1},
    header: { flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' },
    main: { flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'},
    footer: { flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' },
});

export default LayoutResponsivo;