import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useOrders } from '../contexts/OrderContext';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';

interface AdminDashboardScreenProps {
  navigation: any;
}

const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({ navigation }) => {
  const { orders, updateOrderStatus } = useOrders();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return '#F39C12';
      case 'confirmed': return '#3498DB';
      case 'preparing': return '#9B59B6';
      case 'ready': return '#27AE60';
      case 'delivered': return '#2C3E50';
      default: return '#7F8C8D';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendiente';
      case 'confirmed': return 'Confirmado';
      case 'preparing': return 'En preparación';
      case 'ready': return 'Listo para entregar';
      case 'delivered': return 'Entregado';
      default: return status;
    }
  };

  const handleStatusChange = (orderId: string, currentStatus: string) => {
    let newStatus: any;
    
    switch (currentStatus) {
      case 'pending': newStatus = 'confirmed'; break;
      case 'confirmed': newStatus = 'preparing'; break;
      case 'preparing': newStatus = 'ready'; break;
      case 'ready': newStatus = 'delivered'; break;
      default: return;
    }
    
    updateOrderStatus(orderId, newStatus);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Panel de Administración" 
        showBack 
        onBack={() => navigation.goBack()}
      />
      
      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{orders.length}</Text>
          <Text style={styles.statLabel}>Total Pedidos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {orders.filter(o => o.status === 'pending').length}
          </Text>
          <Text style={styles.statLabel}>Pendientes</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {orders.filter(o => o.status === 'delivered').length}
          </Text>
          <Text style={styles.statLabel}>Entregados</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.orders}>
        <Text style={styles.sectionTitle}>Pedidos Recientes</Text>
        
        {orders.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="document-text-outline" size={60} color="#BDC3C7" />
            <Text style={styles.emptyStateText}>No hay pedidos aún</Text>
          </View>
        ) : (
          orders.map(order => (
            <View key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Text style={styles.orderId}>Pedido #{order.id.slice(-6)}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
                  <Text style={styles.statusText}>{getStatusText(order.status)}</Text>
                </View>
              </View>
              
              <View style={styles.orderInfo}>
                <Text style={styles.customerName}>{order.userName}</Text>
                <Text style={styles.customerInfo}>{order.userPhone}</Text>
                <Text style={styles.customerInfo}>{order.userAddress}</Text>
                <Text style={styles.orderDate}>{formatDate(order.date)}</Text>
              </View>
              
              {order.status !== 'delivered' && (
                <TouchableOpacity 
                  style={styles.updateButton}
                  onPress={() => handleStatusChange(order.id, order.status)}
                >
                  <Text style={styles.updateButtonText}>
                    {order.status === 'ready' ? 'Marcar como entregado' : 'Siguiente estado'}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9F9',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#D5D8DC',
  },
  statCard: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86C1',
  },
  statLabel: {
    fontSize: 12,
    color: '#7F8C8D',
    marginTop: 5,
  },
  orders: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginTop: 10,
  },
  orderCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orderInfo: {
    marginBottom: 15,
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  customerInfo: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 3,
  },
  orderDate: {
    fontSize: 12,
    color: '#95A5A6',
    marginTop: 5,
  },
  updateButton: {
    backgroundColor: '#2E86C1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AdminDashboardScreen;