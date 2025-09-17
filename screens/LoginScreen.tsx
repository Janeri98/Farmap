import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    const success = login(email, password);
    if (success) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Iniciar Sesión" 
        showBack 
        onBack={() => navigation.goBack()}
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Logo de la farmacia */}
        <Image 
          source={require('../assets/logo.png')} // coloca aquí tu logo en assets
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Bienvenido de nuevo</Text>
        <Text style={styles.subtitle}>Ingresa a tu cuenta</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>¿No tienes cuenta? Regístrate aquí</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
            <Text style={styles.adminLink}>Acceso administrador</Text>
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
    alignItems: 'center', // centra el logo y los textos
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
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
    backgroundColor: '#2E86C1',
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
    marginBottom: 10,
  },
  adminLink: {
    color: '#E74C3C',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
