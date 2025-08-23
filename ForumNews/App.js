import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ClimaScreen from './ClimaScreen';
import DolarScreen from './DolarScreen';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>¡Javier Milei viaja mañana a Chaco para participar de la convención evangelista!</Text>
      <Image
        source={{ uri:  'https://www.infobae.com/resizer/v2/DK3YCIG77VFA3OMLGTXSJLX6TE.jpg?auth=a794ae30d80c93a2ddb3581f16629fbd2f9128fdbdac58d28089b7d34060caa7&smart=true&width=992&height=661&quality=85' }}
        style={styles.image}
      />

      <Text style={styles.header}>¡La economia corre peligro gracias a la guerra entre Iran e Israel!</Text>
      <Image
        source={{ uri: 'https://itu.uncuyo.edu.ar/cache/finanzas-18oct_732_1296.png' }}
        style={styles.image}
      />

      <Text style={styles.header}>¡Dragon Ball Super saca el capitulo numero 187 de su Manga!</Text>
      <Image
        source={{ uri: 'https://sm.ign.com/t/ign_latam/screenshot/default/jcg_rmkw.1280.jpg' }}
        style={styles.image}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la pantalla de Perfil</Text>
    </View>
  );
}

function Dolar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la pantalla de Dolar</Text>
    </View>
  );
}

function Clima() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la pantalla de Clima</Text>
    </View>
  );
}

function Noticias() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la pantalla de Noticias</Text>
    </View>
  );
}

function Deportes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la pantalla de Deportes</Text>
    </View>
  );
}

function Entretenimiento() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la pantalla de Entretenimiento</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable
                onPress={() => navigation.toggleDrawer()}
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <Text style={{ fontSize: 26 }}>☰</Text>
              </Pressable>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
                }}
                style={{ width: 30, height: 30 }}
              />
            </View>
          ),
        })}
      >
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Clima" component={ClimaScreen} />
        <Drawer.Screen name="Noticias" component={Noticias} />
        <Drawer.Screen name="Deportes" component={Deportes} />
        <Drawer.Screen name="Dolar" component={DolarScreen} />
        <Drawer.Screen name="Entretenimiento" component={Entretenimiento} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
};
