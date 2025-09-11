import { View, Text, StyleSheet } from 'react-native'

const LayoutResponsivo = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}> 
        </View>
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.profileContainer}>
              <View style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.name}>Kenji Sato</Text>
                <Text style={styles.description}>Engenheiro/Analista de dados, entusiasta da cultura Data driven</Text>
                <View style={styles.buttonContainer}>
                  <Text style={styles.button} onPress={() => { /* abrir github */ }}>Github</Text>
                  <Text style={styles.button} onPress={() => { /* abrir linkedin */ }}>Linkedin</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
         <Text>Rodapé</Text>   
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {flex: 1},
    header: { flex: 1, backgroundColor: 'black'},
    main: { flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'},
    footer: { flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' },
    card: { width: '90%', height: '80%', backgroundColor: '#f0f0f0', borderRadius: 10, padding: 20, elevation: 5, alignItems: 'center', justifyContent: 'center' },
    profileContainer: { flexDirection: 'column', alignItems: 'center' },
    avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'grey' },
    info: { flex: 1, alignItems: 'center' },
    name: { fontSize: 24, fontWeight: 'bold' },
    description: { fontSize: 16, color: '#666', marginVertical: 10 },
    buttonContainer: { flexDirection: 'row', marginTop: 10 },
    button: { backgroundColor: 'blue', color: 'white', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, marginRight: 10 }

});

export default LayoutResponsivo;