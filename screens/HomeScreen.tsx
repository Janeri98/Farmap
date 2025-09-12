import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Farmacia" 
        showLogout={!!user} 
        onLogout={handleLogout}
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        {/* Logo de la farmacia */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/logo.png')} 
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        
        <Text style={styles.welcomeText}>
          {user ? `Bienvenido, ${user.name}` : 'Bienvenido a Farmacia Norma'}
        </Text>
        
        <Text style={styles.subtitle}>
          Trabajamos por su salud dia a dia
        </Text>

        <View style={styles.menuGrid}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Products')}
          >
            <Ionicons name="medkit-outline" size={40} color="#2E86C1" />
            <Text style={styles.menuText}>Ver Productos</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Order')}
          >
            <Ionicons name="cart-outline" size={40} color="#2E86C1" />
            <Text style={styles.menuText}>Hacer Pedido</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Contact')}
          >
            <Ionicons name="chatbubbles-outline" size={40} color="#2E86C1" />
            <Text style={styles.menuText}>Contactar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate('Promotions')}
          >
            <Ionicons name="pricetags-outline" size={40} color="#2E86C1" />
            <Text style={styles.menuText}>Promociones</Text>
          </TouchableOpacity>

          {!user && (
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigation.navigate('Login')}
            >
              <Ionicons name="person-outline" size={40} color="#2E86C1" />
              <Text style={styles.menuText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          )}

          {user?.isAdmin && (
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigation.navigate('AdminDashboard')}
            >
              <Ionicons name="settings-outline" size={40} color="#2E86C1" />
              <Text style={styles.menuText}>Panel Admin</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9F9',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 75, // Hace el contenedor redondo
    backgroundColor: 'white', // Fondo blanco para el logo
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: 'hidden', // Importante para que la imagen se recorte de forma redonda
  },
  logo: {
    width: '100%',
    height: '100%',
    // La imagen se ajustará para llenar el contenedor redondo
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 30,
    textAlign: 'center',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  menuItem: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  menuText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
  },
});

export default HomeScreen;