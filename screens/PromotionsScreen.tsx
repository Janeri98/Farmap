import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

interface PromotionsScreenProps {
  navigation: any;
}

const PromotionsScreen: React.FC<PromotionsScreenProps> = ({ navigation }) => {
  const promotions = [
    {
      id: '1',
      title: '2x1 en Vitaminas',
      description: 'Lleva 2 frascos de vitaminas y paga solo 1. Válido hasta fin de mes.',
      image: 'https://via.placeholder.com/300x150?text=Promoción+2x1',
      validUntil: '30/11/2023'
    },
    {
      id: '2',
      title: '20% de descuento en medicamentos genéricos',
      description: 'Todos los medicamentos genéricos con 20% de descuento toda la semana.',
      image: 'https://via.placeholder.com/300x150?text=20%+Descuento',
      validUntil: '15/12/2023'
    },
    {
      id: '3',
      title: 'Combo cuidado familiar',
      description: 'Termómetro digital + tapabocas x50 + alcohol en gel 500ml a precio especial.',
      image: 'https://via.placeholder.com/300x150?text=Combo+Familiar',
      validUntil: '31/12/2023'
    },
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Promociones" 
        showBack 
        onBack={() => navigation.goBack()}
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Promociones Especiales</Text>
        <Text style={styles.subtitle}>
          Aprovecha nuestras ofertas y descuentos exclusivos
        </Text>

        {promotions.map(promo => (
          <View key={promo.id} style={styles.promoCard}>
            <Image source={{ uri: promo.image }} style={styles.promoImage} />
            <View style={styles.promoContent}>
              <Text style={styles.promoTitle}>{promo.title}</Text>
              <Text style={styles.promoDescription}>{promo.description}</Text>
              <View style={styles.promoFooter}>
                <View style={styles.validity}>
                  <Ionicons name="calendar-outline" size={16} color="#7F8C8D" />
                  <Text style={styles.validityText}>Válido hasta: {promo.validUntil}</Text>
                </View>
                <TouchableOpacity style={styles.claimButton}>
                  <Text style={styles.claimButtonText}>Reclamar oferta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.newsletter}>
          <Text style={styles.newsletterTitle}>¡No te pierdas nuestras promociones!</Text>
          <Text style={styles.newsletterText}>
            Suscríbete a nuestro newsletter y recibe todas las ofertas directamente en tu email.
          </Text>
          <TouchableOpacity style={styles.newsletterButton}>
            <Text style={styles.newsletterButtonText}>Suscribirme</Text>
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
  promoCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  promoImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  promoContent: {
    padding: 15,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  promoDescription: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 15,
    lineHeight: 20,
  },
  promoFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  validity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  validityText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#7F8C8D',
  },
  claimButton: {
    backgroundColor: '#E74C3C',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  claimButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  newsletter: {
    backgroundColor: '#EBF5FB',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  newsletterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E86C1',
    marginBottom: 10,
    textAlign: 'center',
  },
  newsletterText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 20,
  },
  newsletterButton: {
    backgroundColor: '#2E86C1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  newsletterButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PromotionsScreen;