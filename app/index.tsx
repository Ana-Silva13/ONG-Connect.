import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert // Importado para dar feedback real ao usuário
} from 'react-native';



export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const isEmailValid = email.includes('@');
    const isPasswordValid = password.length >= 7; // Ajustado para bater com o placeholder

    if (isEmailValid && isPasswordValid) {
      console.log(`✅ Acesso autorizado para: ${email}`);
      // Em um app real, aqui você usaria:
      // router.replace('/(tabs)'); 
      Alert.alert("Sucesso", "Login realizado com sucesso!");
    } else {
      Alert.alert(
        "Erro de Validação", 
        "Verifique se o e-mail é válido e se a senha tem pelo menos 7 caracteres."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.content}
      >
        
        {/* Topo (Logo) */}
        <View style={styles.header}>
          <Text style={styles.logo}>ONG<Text style={styles.logoBold}>CONECTA</Text></Text>
        </View>

        {/* Centro (Formulário) */}
        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Mínimo 7 caracteres"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          {email.length > 0 && (
            <Text style={styles.helperText}>Logando como: {email}</Text>
          )}
        </View>

        {/* Base (Botões) */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => console.log('Recuperar senha')}
            style={styles.forgotPasswordContainer}
          >
            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
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
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 10,
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
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#666',
    textDecorationLine: 'underline',
  },
});
