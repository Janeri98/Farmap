import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

interface ProductsScreenProps {
  navigation: any;
}

const ProductsScreen: React.FC<ProductsScreenProps> = ({ navigation }) => {
  // Lista de productos de farmacia en orden alfabético
  const products = [
    'Acetaminofén 500mg',
    'Alcohol etílico 70%',
    'Amoxicilina 500mg',
    'Aspirina 100mg',
    'Atorvastatina 20mg',
    'Banda adhesiva (Curitas)',
    'Clonazepam 2mg',
    'Desloratadina 5mg',
    'Diazepam 5mg',
    'Digoxina 0.25mg',
    'Donepezilo 5mg',
    'Esparadrapo',
    'Gasas estériles',
    'Gel antiinflamatorio',
    'Guantes de látex',
    'Ibuprofeno 400mg',
    'Insulina NPH',
    'Jarabe para la tos',
    'Lansoprazol 30mg',
    'Losartán 50mg',
    'Metformina 500mg',
    'Metronidazol 250mg',
    'Omeprazol 20mg',
    'Paracetamol 500mg',
    'Prednisona 5mg',
    'Sales de rehidratación oral',
    'Salbutamol inhalador',
    'Termómetro digital',
    'Vitamina C 1000mg',
    'Vitamina D3 1000UI'
  ].sort(); // Orden alfabético

  const handleConsult = (productName: string) => {
    alert(`Producto consultado: ${productName}\n\nTe contactaremos pronto con más información.`);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Catálogo de Productos" 
        showBack 
        onBack={() => navigation.goBack()}
      />
      
      <View style={styles.header}>
        <Ionicons name="medkit" size={24} color="#2E86C1" />
        <Text style={styles.headerTitle}>Productos Farmacia</Text>
      </View>

      <Text style={styles.subtitle}>
        Consulta por cualquiera de nuestros productos disponibles
      </Text>

      <ScrollView contentContainerStyle={styles.productsList}>
        {products.map((product, index) => (
          <View key={index} style={styles.productItem}>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product}</Text>
            </View>
            <TouchableOpacity 
              style={styles.consultButton}
              onPress={() => handleConsult(product)}
            >
              <Ionicons name="information-circle-outline" size={16} color="white" />
              <Text style={styles.consultButtonText}>Consultar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#D5D8DC',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#F8F9F9',
  },
  productsList: {
    padding: 10,
  },
  productItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    color: '#2C3E50',
    fontWeight: '500',
  },
  consultButton: {
    backgroundColor: '#2E86C1',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  consultButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ProductsScreen;