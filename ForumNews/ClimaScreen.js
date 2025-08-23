// ClimaScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function ClimaScreen() {
  const [clima, setClima] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const ciudad = 'Buenos Aires';
    fetch(`https://wttr.in/${ciudad}?format=j1`)
      .then((response) => response.json())
      .then((data) => {
        setClima(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al obtener el clima:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text>Cargando clima...</Text>
      </View>
    );
  }

  if (!clima) {
    return (
      <View style={styles.container}>
        <Text>Error al obtener el clima.</Text>
      </View>
    );
  }

  const current = clima.current_condition[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima en Buenos Aires</Text>
      <Text style={styles.temp}>{current.temp_C}°C</Text>
      <Text style={styles.desc}>{current.weatherDesc[0].value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 48,
    color: '#2196F3',
    marginTop: 10,
  },
  desc: {
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: 5,
    textTransform: 'capitalize',
  },
});
