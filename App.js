import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screen
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={BrownTheme}>
        <NavigationContainer theme={BrownTheme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignInScreen" component={LoginScreen} />
            <Stack.Screen name="MyStashScreen" component={MyStashScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>  );
}