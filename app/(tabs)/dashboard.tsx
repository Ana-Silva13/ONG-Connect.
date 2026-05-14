import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Dashboard() {
  const { userName } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Olá, {userName} 👋
      </Text>

      <Text style={styles.subtitle}>
        Bem-vindo ao ONG Conecta!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#b00ed0",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: "#555",
  },
});