import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen'

export default function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}