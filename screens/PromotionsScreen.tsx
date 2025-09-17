import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert, Linking } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

interface PromotionsScreenProps {
  navigation: any;
}

const PromotionsScreen: React.FC<PromotionsScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) {
      Alert.alert('Error', 'Por favor ingresa tu correo electrónico');
      return;
    }

    // Validación simple de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico válido');
      return;
    }

    Alert.alert('¡Gracias!', `Te has suscrito con el correo: ${email}\nRecibirás nuestras promociones pronto.`);
    setEmail('');
  };

  const contactWhatsApp = () => {
    const phoneNumber = '50489065078'; // Tu número de WhatsApp
    const message = 'Hola, me gustaría recibir información sobre promociones y realizar una consulta.';
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'No se pudo abrir WhatsApp. Asegúrate de tener la aplicación instalada.');
    });
  };

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
          Mantente informado sobre nuestras mejores ofertas
        </Text>

        {/* Sección de suscripción por correo */}
        <View style={styles.subscriptionCard}>
          <Ionicons name="mail-outline" size={40} color="#2E86C1" style={styles.subscriptionIcon} />
          <Text style={styles.subscriptionTitle}>Recibe nuestras promociones</Text>
          <Text style={styles.subscriptionText}>
            Déjanos tu correo electrónico y te enviaremos nuestras mejores ofertas y descuentos exclusivos.
          </Text>
          
          <TextInput
            style={styles.emailInput}
            placeholder="Tu correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
            <Text style={styles.subscribeButtonText}>Suscribirme</Text>
          </TouchableOpacity>
        </View>

        {/* Sección de contacto por WhatsApp */}
        <View style={styles.whatsappCard}>
          <Ionicons name="logo-whatsapp" size={40} color="#25D366" style={styles.whatsappIcon} />
          <Text style={styles.whatsappTitle}>¿Tienes alguna consulta?</Text>
          <Text style={styles.whatsappText}>
            Contáctanos directamente por WhatsApp para recibir información personalizada sobre promociones y realizar consultas.
          </Text>
          
          <TouchableOpacity style={styles.whatsappButton} onPress={contactWhatsApp}>
            <Ionicons name="logo-whatsapp" size={20} color="white" />
            <Text style={styles.whatsappButtonText}>Contactar por WhatsApp</Text>
          </TouchableOpacity>
        </View>

        {/* Información adicional */}
        <View style={styles.infoCard}>
          <Ionicons name="information-circle-outline" size={30} color="#2E86C1" />
          <Text style={styles.infoText}>
            • Descuentos exclusivos en medicamentos{"\n"}
            • Ofertas especiales semanales{"\n"}
            • Promociones en productos de cuidado personal{"\n"}
            • Descuentos para clientes frecuentes
          </Text>
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
  subscriptionCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  subscriptionIcon: {
    marginBottom: 15,
  },
  subscriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subscriptionText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  emailInput: {
    width: '100%',
    backgroundColor: '#F8F9F9',
    borderWidth: 1,
    borderColor: '#D5D8DC',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  subscribeButton: {
    backgroundColor: '#2E86C1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  subscribeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  whatsappCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  whatsappIcon: {
    marginBottom: 15,
  },
  whatsappTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
  },
  whatsappText: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  whatsappButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoCard: {
    backgroundColor: '#EBF5FB',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 22,
    flex: 1,
  },
});

export default PromotionsScreen;