import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function Perfil() {
  const { userName, voluntarioId } = useLocalSearchParams();

  function editarInteresses() {
    Alert.alert(
      "Interesses",
      "Quais causas você prefere?",
      [
        { text: "Educação" },
        { text: "Meio Ambiente" },
        { text: "Saúde" },
        { text: "Cancelar", style: "cancel" },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{userName}</Text>

      <Text style={styles.id}>
        ID: {voluntarioId}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={editarInteresses}
      >
        <Text style={styles.buttonText}>
          Editar Interesses
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  nome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#b00ed0",
  },

  id: {
    marginTop: 10,
    color: "#555",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#b00ed0",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,

    elevation: 3,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});