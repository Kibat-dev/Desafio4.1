import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import ContactForm from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <ContactForm/>
      <StatusBar style="auto" />
      <text>by: Gustavo Kibata</text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0002',
    alignItems: 'center',
    justifyContent: 'center',
  },
});