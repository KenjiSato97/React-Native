import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React, { use, useEffect, useState } from 'react'
import {db} from '../config/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';

const HomeScreen = ({navigation}) => {

    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchCursos = async () => {
            try {
              const snapshot = await getDocs(collection(db, 'cursos')) 
              const  data = snapshot.docs.map(doc => ({ 
                id: doc.id, 
                ...doc.data() 
              }))
              setCourses(data)
            } catch (error) {
                console.error("Erro ao buscar cursos: ", error);
                setError('Erro ao carregar os cursos.')
            } finally {
                setLoading(false)
            }
        }
        fetchCursos()
    }, [])

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Carregando cursos...</Text>
            </View>
        )
    }


   // const cursos = [
   //     { id: '1', title: 'React Native Básico', description: 'Aprenda os fundamentos do React Native.' },
   //     { id: '2', title: 'JavaScript Avançado', description: 'Aprofunde seus conhecimentos em JavaScript.' },
   //     { id: '3', title: 'Desenvolvimento Mobile', description: 'Crie aplicativos móveis incríveis.' },
   //     { id: '4', title: 'UI/UX Design', description: 'Melhore a experiência do usuário em seus apps.' },
   // ];

    const goToDetailsScreen = (courses) => {
        navigation.navigate('Details', { course: courses });
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Cursos Disponíveis</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={[styles.itemContainer, styles.borderRadius]}
            onPress={() => goToDetailsScreen(item)}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            </TouchableOpacity> 
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20, backgroundColor: '#f5f5f5'},
    title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'},
    itemContainer: {padding: 15, backgroundColor: '#fff', marginBottom: 10},
    borderRadius: {borderRadius: 8, elevation: 2},
    itemTitle: {fontSize: 18, fontWeight: 'bold'},
    itemDescription: {fontSize: 14, color: '#666', marginTop: 5}
})

export default HomeScreen