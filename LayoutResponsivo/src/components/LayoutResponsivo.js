import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { Image } from 'react-native';

const LayoutResponsivo = () => {
  const handleGithubPress = () => {
    alert('Abrindo Github');
  };
  const handleLinkedinPress = () => {
    alert('Abrindo Linkedin');
  };


  return (
    <View style={styles.container}>
        <View style={styles.header}> 
        </View>
        <View style={styles.main}>
          <View style={styles.card}>
              <Image
                source={require('../images/profile-picture.png')}
                style={styles.avatar}/>
                <Text style={styles.name}>Kenji Sato</Text>
                <Text style={styles.description}>Engenheiro/Analista de dados, entusiasta da cultura Data driven</Text>
                <View style={styles.buttonContainer}>
                  <Text style={styles.button2} onPress={handleGithubPress}>Github</Text>
                  <Text style={styles.button} onPress={handleLinkedinPress}>Linkedin</Text>
                </View>
          </View>
        </View>
        <View style={styles.footer}> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: { flex: 0.3, backgroundColor: 'black'},
  main: { flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'},
  footer: { flex: 0.3, backgroundColor: 'black'},
  card: { width: '90%', height: '50%', backgroundColor: '#f0f0f0', borderRadius: 10, padding: 20, elevation: 5, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: 'black' },
  name: { fontSize: 24, fontWeight: 'bold' },
  description: { fontSize: 16, textAlign: 'center', marginTop: 5 },
  buttonContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', width: '70%' },
  button: { backgroundColor: 'blue', color: 'white', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5, },
  button2: { backgroundColor: '#4d4b4bff', color: 'white', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5 }
});

export default LayoutResponsivo;