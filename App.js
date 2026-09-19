import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.header}>My Custom Dashboard</Text>

        <StatCard
          title="Total Users"
          value="1,240"
          bgColor="#4f46e5"
          emoji="👥"
        />
       
        <StatCard
          title="Revenue"
          value="$12,450"
          bgColor="#059669"
          emoji="💰"
        />
       
        <StatCard
          title="Pending Issues"
          value="3"
          bgColor="#d97706"
          emoji="⚠️"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', 
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: '800',
    color: '#f8fafc',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
});
