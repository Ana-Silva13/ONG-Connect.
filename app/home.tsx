import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const CAMPANHAS = [
  { id: '1', titulo: 'Arrecadação de Alimentos', local: 'Centro', progresso: '70%' },
  { id: '2', titulo: 'Adoção de Pets', local: 'Parque Municipal', progresso: '45%' },
  { id: '3', titulo: 'Plantio de Árvores', local: 'Reserva Sul', progresso: '90%' },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, Voluntário! 👋</Text>
          <Text style={styles.subtitle}>Vamos mudar o mundo hoje?</Text>
        </View>
        <View style={styles.avatarPlaceholder} />
      </View>

      <View style={styles.impactCard}>
        <Text style={styles.impactTitle}>Seu Impacto</Text>
        <Text style={styles.impactValue}>12 Horas doadas</Text>
      </View>

      <Text style={styles.sectionTitle}>Campanhas Ativas</Text>

      <FlatList
        data={CAMPANHAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardLocal}>{item.local}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.progresso}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos no mesmo arquivo para evitar erro de rota no Expo Router
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA', paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 60, marginBottom: 30 },
  greeting: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 14, color: '#666' },
  avatarPlaceholder: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#2E7D32' },
  impactCard: { backgroundColor: '#2E7D32', padding: 20, borderRadius: 16, marginBottom: 30 },
  impactTitle: { color: '#E8F5E9', fontSize: 14 },
  impactValue: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  listContainer: { paddingBottom: 100 },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  cardLocal: { fontSize: 12, color: '#888' },
  badge: { backgroundColor: '#E8F5E9', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  badgeText: { color: '#2E7D32', fontWeight: 'bold', fontSize: 12 },
  fab: { position: 'absolute', right: 20, bottom: 30, backgroundColor: '#2E7D32', width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center' },
  fabText: { color: '#FFF', fontSize: 28 },
});