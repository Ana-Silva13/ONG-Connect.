import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DashboardScreen() {
  // O Expo Router usa esse hook para pegar os parâmetros da URL/Navegação
  const { userName, voluntarioId } = useLocalSearchParams<{ userName: string; voluntarioId: string }>();
  const router = useRouter();

  const handleLogout = () => {
    // No Expo Router, para "limpar" a pilha e voltar ao login:
    // Se o seu arquivo de login for o 'index.tsx', usamos o replace para a raiz '/'
    router.replace('/'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
           <Text style={styles.logo}>
            ONG<Text style={styles.logoBold}>CONECTA</Text>
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.text}>
            Olá, <Text style={styles.userName}>{userName}</Text>, que bom ter você aqui para ajudar!
          </Text>

          <Text style={styles.idText}>
            ID do voluntário: <Text style={styles.bold}>{voluntarioId}</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>SAIR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
  },
  logo: {
    fontSize: 24,
    color: '#c618e9',
    letterSpacing: 2,
  },
  logoBold: {
    fontWeight: 'bold',
  },
  infoBox: {
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  userName: {
    color: '#b00ed0',
    fontWeight: 'bold',
  },
  idText: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#EAEAEA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#b00ed0',
    width: '100%',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});