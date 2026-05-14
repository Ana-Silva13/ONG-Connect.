import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";

import { useEffect, useState } from "react";

import ONGCard from "../components/ONGCard";

export default function Explorar() {
  const [loading, setLoading] = useState(true);
  const [ongs, setOngs] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setOngs([
        {
          id: "1",
          nome: "Instituto Esperança",
          causa: "Educação",
          descricao: "Ajuda crianças com reforço escolar.",
          imagem:
            "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
        },
        {
          id: "2",
          nome: "EcoVida",
          causa: "Meio Ambiente",
          descricao: "Projetos de reflorestamento urbano.",
          imagem:
            "https://images.unsplash.com/photo-1492496913980-501348b61469",
        },
        {
          id: "3",
          nome: "Saúde para Todos",
          causa: "Saúde",
          descricao: "Atendimento médico gratuito.",
          imagem:
            "https://images.unsplash.com/photo-1516549655169-df83a0774514",
        },
      ]);

      setLoading(false);
    }, 2000);
  }, []);

  function mostrarDetalhes(ong: any) {
    Alert.alert(
      ong.nome,
      `${ong.causa}\n\n${ong.descricao}`
    );
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#b00ed0" />
        <Text>Carregando ONGs...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={ongs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ONGCard
            ong={item}
            onPress={() => mostrarDetalhes(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F5F5F5",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});