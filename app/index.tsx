import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router'; // Importação correta para Expo Router

export default function HomeScreen() {
  const router = useRouter(); // Hook para navegação no Expo

  const handleGoToLogin = () => {
    // No Expo Router, usamos push ou replace para o caminho do arquivo
    // Se o seu arquivo de login se chama login.tsx, o caminho é "/login"
    router.push("/login"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Topo (Logo) */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          ONG<Text style={styles.logoBold}>CONECTA</Text>
        </Text>
      </View>

      {/* Centro */}
      <View style={styles.form}>
        <Text style={styles.label}>Bem-vindo ao aplicativo</Text>
      </View>

      {/* Botão */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleGoToLogin}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    fontSize: 32,
    color: '#c618e9',
    letterSpacing: 2,
  },
  logoBold: {
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#333',
  },
  footer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#b00ed0',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});