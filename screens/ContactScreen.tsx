import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

interface ContactScreenProps {
  navigation: any;
}

const ContactScreen: React.FC<ContactScreenProps> = ({ navigation }) => {
  const makeCall = () => {
    Linking.openURL('tel:+50489065078');
  };

  const sendWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=50489065078&text=Hola,%20necesito%20información%20sobre%20medicamentos%20o%20productos%20de%20Farmap');
  };

  const sendEmail = () => {
    Linking.openURL('mailto:sayraavila@gmail.com?subject=Consulta&body=Hola,%20me%20gustaría%20saber...');
  };
const openMap = () => {
  Linking.openURL('https://maps.app.goo.gl/bfZdqnkkVREPkGNi9?g_st=aw');
};


  return (
    <View style={styles.container}>
      <Header 
        title="Contacto" 
        showBack 
        onBack={() => navigation.goBack()}
      />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Contáctanos</Text>
        <Text style={styles.subtitle}>
          Estamos aquí para ayudarte. Elige tu método preferido de contacto.
        </Text>

        <View style={styles.contactOptions}>
          <TouchableOpacity style={styles.option} onPress={makeCall}>
            <Ionicons name="call-outline" size={40} color="#2E86C1" />
            <Text style={styles.optionText}>Llamar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={sendWhatsApp}>
            <Ionicons name="logo-whatsapp" size={40} color="#25D366" />
            <Text style={styles.optionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={sendEmail}>
            <Ionicons name="mail-outline" size={40} color="#E74C3C" />
            <Text style={styles.optionText}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={openMap}>
            <Ionicons name="location-outline" size={40} color="#27AE60" />
            <Text style={styles.optionText}>Visítanos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Información de contacto</Text>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={20} color="#2E86C1" />
            <Text style={styles.infoText}>Lunes a Sábado: 9:00 AM - 5:00 PM</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={20} color="#2E86C1" />
            <Text style={styles.infoText}>Domingo: 9:00 AM - 5:00 PM</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="call-outline" size={20} color="#2E86C1" />
            <Text style={styles.infoText}>Teléfono: +504 89065078</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="mail-outline" size={20} color="#2E86C1" />
            <Text style={styles.infoText}>Email: sayraavila@gmail.com</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={20} color="#2E86C1" />
            <Text style={styles.infoText}>Dirección: Calle Principal Frente a plaza Mami Kalla #, Ciudad Tegucigalpa </Text>
          </View>
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
  contactOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  option: {
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
  optionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  info: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#2C3E50',
  },
});

export default ContactScreen;