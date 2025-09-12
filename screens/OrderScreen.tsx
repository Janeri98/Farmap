import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useOrders } from '../contexts/OrderContext';
import Header from '../components/Header';
import { Order } from '../models/Order';

interface OrderScreenProps {
  navigation: any;
}

const OrderScreen: React.FC<OrderScreenProps> = ({ navigation }) => {
  const { user } = useAuth();
  const { addOrder } = useOrders();
  const [orderDetails, setOrderDetails] = useState('');

  const handlePlaceOrder = () => {
    if (!user) {
      Alert.alert('Error', 'Debes iniciar sesión para hacer un pedido');
      navigation.navigate('Login');
      return;
    }

    if (!orderDetails.trim()) {
      Alert.alert('Error', 'Por favor describe tu pedido');
      return;
    }

    // En una app real, aquí procesaríamos los detalles del pedido
    const newOrder: Order = {
      id: '',
      userId: user.id,
      userName: user.name,
      userAddress: user.address,
      userPhone: user.phone,
      products: [], // En una app real, esto vendría de un carrito
      total: 0, // Se calcularía en base a los productos
      status: 'pending',
      date: new Date(),
    };

    addOrder(newOrder);
    Alert.alert('Éxito', 'Pedido realizado correctamente. Te contactaremos pronto.', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Hacer Pedido" 
        showBack 
        onBack={() => navigation.goBack()}
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Realiza tu pedido</Text>
        <Text style={styles.subtitle}>
          Describe los medicamentos o productos que necesitas
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Detalles del pedido"
            value={orderDetails}
            onChangeText={setOrderDetails}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />

          {user ? (
            <View style={styles.userInfo}>
              <Text style={styles.infoText}>Enviaremos tu pedido a:</Text>
              <Text style={styles.infoDetail}>{user.address}</Text>
              <Text style={styles.infoText}>Te contactaremos al:</Text>
              <Text style={styles.infoDetail}>{user.phone}</Text>
            </View>
          ) : (
            <Text style={styles.loginPrompt}>
              Para hacer un pedido, necesitas iniciar sesión primero.
            </Text>
          )}

          <TouchableOpacity 
            style={[styles.button, !user && styles.buttonDisabled]} 
            onPress={handlePlaceOrder}
            disabled={!user}
          >
            <Text style={styles.buttonText}>Confirmar Pedido</Text>
          </TouchableOpacity>

          {!user && (
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.secondaryButtonText}>Iniciar Sesión</Text>
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D5D8DC',
    minHeight: 150,
    textAlignVertical: 'top',
  },
  userInfo: {
    backgroundColor: '#EBF5FB',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#2E86C1',
    marginBottom: 5,
  },
  infoDetail: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
  },
  loginPrompt: {
    textAlign: 'center',
    color: '#E74C3C',
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#27AE60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonDisabled: {
    backgroundColor: '#BDC3C7',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#2E86C1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OrderScreen;