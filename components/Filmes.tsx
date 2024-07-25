import { Text, Image, View, StyleSheet } from 'react-native';

interface FilmeProps {
    titulo: string,
    diretor: string,
    origem: string,
    ano: number,
    cartaz: string
}

const Filmes = (filmes: any) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{filmes.titulo}</Text>
            <Text style={styles.info}>Dir. {filmes.diretor}</Text>
            <Text style={styles.info}>Origem: {filmes.origem}</Text>
            <Text style={styles.info}>Ano: {filmes.ano}</Text>
            <Image source={filmes.cartaz} style={styles.image}/>
        </View>
    )
    }

    const styles = StyleSheet.create({
        card: {
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 20,
          margin: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5
        },
        title: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: 'center'
        },
        info: {
          fontSize: 16,
          marginBottom: 5,
          textAlign: 'center'
        },
        image: {
          width: 300,
          height: 400,
          borderRadius: 10,
          marginTop: 10,
          display: 'flex',
          justifyContent: 'center'
        },
      });


export default Filmes