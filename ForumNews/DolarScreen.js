// screens/DolarScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function DolarScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const response = await fetch('https://monedapi.ar/api/usd/bna');
        const json = await response.json();
        console.log('Datos MonedAPI:', json);
        setData(json);
      } catch (err) {
        console.error('Error al obtener el dólar oficial:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchDolar();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando cotización...</Text>
      </View>
    );
  }

  if (error || !data || !data.compra) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Error al obtener datos del dólar</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dólar Oficial (BNA)</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Compra: ${data.compra}</Text>
        <Text style={styles.text}>Venta: ${data.venta}</Text>
        {data.fecha && <Text style={styles.date}>Fecha: {data.fecha}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20, backgroundColor:'#fff' },
  title: { fontSize:24, fontWeight:'bold', marginBottom:20 },
  card: { backgroundColor:'#f0f0f0', padding:20, borderRadius:10, width:'80%', alignItems:'center' },
  text: { fontSize:18, marginVertical:5 },
  date: { fontSize:12, marginTop:10, color:'#666' },
  error: { fontSize:16, color:'red' },
});
