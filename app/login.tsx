import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from "react-native";
import { router } from "expo-router";

export default function Login() {
  const [nome, setNome] = useState("");

  function entrar() {
    if (!nome.trim()) {
      alert("Digite seu nome!");
      return;
    }

    router.push({
      pathname: "/(tabs)/dashboard",
      params: {
        userName: nome,
        voluntarioId: Math.random().toString(36).substring(2, 9), // Alterado para bater com seu tipo
      },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* --- TOPO --- */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          ONG<Text style={styles.logoBold}>CONECTA</Text>
        </Text>
          <Text style={styles.tituloPagina}>Login</Text>
      </View>
     

      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.label}>Nome do Voluntário</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />

          <TouchableOpacity style={styles.button} onPress={entrar}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  tituloPagina: {
    fontSize: 14,
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
  },
  logo: {
    fontSize: 32,
    color: '#c618e9',
    letterSpacing: 2,
  },
  logoBold: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    height: 55,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#b00ed0',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});