import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { Product } from '../models/Product';

interface ProductsScreenProps {
  navigation: any;
}

const ProductsScreen: React.FC<ProductsScreenProps> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Datos de ejemplo - en una app real vendrían de una API
  const products: Product[] = [
    {
      id: '1',
      name: 'Paracetamol 500mg',
      description: 'Analgésico y antipirético para aliviar el dolor y reducir la fiebre',
      price: 5.99,
      category: 'medicamentos',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '2',
      name: 'Ibuprofeno 400mg',
      description: 'Antiinflamatorio no esteroideo para aliviar el dolor y la inflamación',
      price: 7.50,
      category: 'medicamentos',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '3',
      name: 'Vitamina C 1000mg',
      description: 'Suplemento vitamínico para fortalecer el sistema inmunológico',
      price: 12.99,
      category: 'suplementos',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '4',
      name: 'Jarabe para la tos',
      description: 'Alivia la tos seca y productiva, con efecto expectorante',
      price: 8.75,
      category: 'medicamentos',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '5',
      name: 'Termómetro digital',
      description: 'Termómetro digital de alta precisión con pantalla LCD',
      price: 15.99,
      category: 'dispositivos',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '6',
      name: 'Curitas adhesivas',
      description: 'Caja de 100 curitas para protección de heridas leves',
      price: 3.50,
      category: 'primeros-auxilios',
      image: 'https://via.placeholder.com/150'
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'medicamentos', name: 'Medicamentos' },
    { id: 'suplementos', name: 'Suplementos' },
    { id: 'dispositivos', name: 'Dispositivos' },
    { id: 'primeros-auxilios', name: 'Primeros Auxilios' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    // Aquí iría la lógica para agregar al carrito
    alert(`Producto consultado: ${product.name}`);
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Catálogo de Productos" 
        showBack 
        onBack={() => navigation.goBack()}
      />
      
      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.categoryButtonActive
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category.id && styles.categoryTextActive
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.products}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
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
  categories: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#D5D8DC',
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#ECF0F1',
  },
  categoryButtonActive: {
    backgroundColor: '#2E86C1',
  },
  categoryText: {
    color: '#7F8C8D',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  products: {
    padding: 10,
  },
});

export default ProductsScreen;