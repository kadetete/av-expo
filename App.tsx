import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Filmes from './components/Filmes';

export default function App() {
  const filmes = [
  {
    'titulo': 'O Enigma de outro mundo',
    'diretor': 'John Carpenter',
    'origem': 'Estados Unidos',
    'ano': 1982,
    'cartaz': require('./assets/the-thing.jpg')
  },
  {
    'titulo': 'Janela Indiscreta',
    'diretor': 'Alfred Hitchcock',
    'origem': 'Estados Unidos',
    'ano': 1954,
    'cartaz': require('./assets/janela-indiscreta.jpg')
  },
  {
    'titulo': 'Rashomon',
    'diretor': 'Akira Kurosawa',
    'origem': 'Japão',
    'ano': 1950,
    'cartaz': require('./assets/rashomon.jpg')
  }
]

  return (
    <SafeAreaView>
      <ScrollView>
          {filmes.map((item, index) => (
            <Filmes key={index} 
            titulo={item.titulo} 
            diretor={item.diretor}
            origem={item.origem}
            ano={item.ano}
            cartaz={item.cartaz}
            />
          ))}
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
