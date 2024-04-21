import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';
import LoginScreen from './screens/LoginScreen'
import MyStashScreen from './screens/MyStashScreen';

const BrownTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#754825",
    secondary: "yellow",
    background: "#CFC1B2",
    surface: "white",
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={BrownTheme}>
        <MyStashScreen />
        <StatusBar style="light" />
      </PaperProvider>
    </SafeAreaProvider>  );
}