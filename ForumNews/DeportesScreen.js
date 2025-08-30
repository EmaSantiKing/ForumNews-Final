import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';

// 🔹 Datos mock para mostrar partidos
const mockMatches = [
  {
    fixture: { id: 1, status: { short: 'FT', long: 'Finished' } },
    league: { name: 'Serie A' },
    teams: {
      home: { name: 'AC Milan', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/AC_Milan_crest.svg' },
      away: { name: 'Lecce', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/US_Lecce_logo.svg' },
    },
    goals: { home: 2, away: 0 },
  },
  {
    fixture: { id: 2, status: { short: 'FT', long: 'Finished' } },
    league: { name: 'Serie A' },
    teams: {
      home: { name: 'Cremonense', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2e/US_Cremonese_logo.svg' },
      away: { name: 'Sassuolo', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/U.S._Sassuolo_Calcio_logo.svg' },
    },
    goals: { home: 3, away: 2 },
  },
];

export default function DeportesScreen() {
  const [liveMatches, setLiveMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [finishedMatches, setFinishedMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 Cargar los datos mock
    setLiveMatches([]); // no hay partidos en vivo
    setUpcomingMatches([]); // no hay próximos partidos
    setFinishedMatches(mockMatches); // partidos finalizados
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#28a745" />
        <Text>Cargando partidos...</Text>
      </View>
    );
  }

  const renderMatch = ({ item }) => (
    <View style={styles.matchCard}>
      <Text style={styles.league}>{item.league.name}</Text>
      <View style={styles.teams}>
        <Image source={{ uri: item.teams.home.logo }} style={styles.logo} />
        <Text style={styles.team}>{item.teams.home.name}</Text>
        <Text style={styles.score}>
          {item.goals.home} - {item.goals.away}
        </Text>
        <Text style={styles.team}>{item.teams.away.name}</Text>
        <Image source={{ uri: item.teams.away.logo }} style={styles.logo} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚽ Partidos en Vivo</Text>
      {liveMatches.length > 0 ? (
        <FlatList
          data={liveMatches}
          keyExtractor={(item) => item.fixture.id.toString()}
          renderItem={renderMatch}
        />
      ) : (
        <Text>No hay partidos en vivo</Text>
      )}

      <Text style={styles.header}>📅 Próximos Partidos de Hoy</Text>
      {upcomingMatches.length > 0 ? (
        <FlatList
          data={upcomingMatches}
          keyExtractor={(item) => item.fixture.id.toString()}
          renderItem={renderMatch}
        />
      ) : (
        <Text>No hay partidos programados</Text>
      )}

      <Text style={styles.header}>✅ Partidos Finalizados Hoy</Text>
      {finishedMatches.length > 0 ? (
        <FlatList
          data={finishedMatches}
          keyExtractor={(item) => item.fixture.id.toString()}
          renderItem={renderMatch}
        />
      ) : (
        <Text>No hay partidos finalizados</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  matchCard: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2
  },
  league: { fontSize: 14, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  teams: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  team: { fontSize: 14, width: 80, textAlign: 'center' },
  score: { fontSize: 18, fontWeight: 'bold' },
  logo: { width: 30, height: 30 }
});
