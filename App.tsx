import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Filmes, { IFilmes } from './components/Filmes';

export default function App() {
  const API = "https://www.omdbapi.com/?apikey=9e5a67ef"
  const [titulo, setTitulo] = useState('');
  const [filmes, setFilmes] = useState<IFilmes>();

  async function getFilmes() {
    try {
      let res = await fetch(`$(API)&t=$(titulo)`);
      let data = await res.json();
      setFilmes(data.Search || []);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
      <TextInput value={titulo} onChangeText={setTitulo} placeholder="Digite o título do filme"></TextInput>
      <Button title='pesquisar' onPress={getFilmes}/>
            <Filmes 
            Title={filmes?.Title}
            Year={filmes?.Year}
            Poster={filmes?.Poster}
            />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 50
  },
});
