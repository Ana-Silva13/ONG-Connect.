import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ONGCard({ ong, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: ong.imagem }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.nome}>{ong.nome}</Text>
        <Text style={styles.causa}>{ong.causa}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    marginBottom: 15,
    borderRadius: 12,
    overflow: "hidden",

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  image: {
    width: "100%",
    height: 180,
  },

  info: {
    padding: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  causa: {
    marginTop: 5,
    color: "#666",
  },
});