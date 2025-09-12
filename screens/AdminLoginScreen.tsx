import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import Header from '../components/Header';

interface AdminLoginScreenProps {
  navigation: any;
}

const AdminLoginScreen: React.FC<AdminLoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Credenciales de administrador (en una app real, esto vendría de una base de datos segura)
  const adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  const handleAdminLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    if (username === adminCredentials.username && password === adminCredentials.password) {
      navigation.navigate('AdminDashboard');
    } else {
      Alert.alert('Error', 'Credenciales de administrador incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Acceso Administrador" 
        showBack 
        onBack={() => navigation.goBack()}
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Panel de Administración</Text>
        <Text style={styles.subtitle}>Ingresa con tus credenciales de administrador</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Usuario administrador"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleAdminLogin}>
            <Text style={styles.buttonText}>Acceder como Administrador</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Volver al login de cliente</Text>
          </TouchableOpacity>
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
  },
  title: {
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
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#D5D8DC',
  },
  button: {
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#2E86C1',
    textAlign: 'center',
  },
});

export default AdminLoginScreen;