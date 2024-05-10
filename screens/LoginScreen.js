import React from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',  
        alignItems: 'center',
        backgroundColor: '#CFC1B2'
    },
    signInForm: { 
      width: "80%",
      gap: 20
    },
  });

export default function LoginScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const processSignIn = () => {
    Alert.alert('Sign in Successfull')
    navigation.navigate('MyStashScreen')
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Image
        source={require('../assets/CoffeeStashLogo1.png')}
        style = {{ width: 200, height: 200 }}
      />
      <View style={styles.signInForm}>
        <TextInput
            onChangeText={onChangeUsername}
            value={username}
            label="Username"
        />
        <TextInput
            onChangeText={onChangePassword}
            value={password}
            label="Password"
        />
        <Button
            onPress={processSignIn}
            mode="contained"
            accessibilityLabel="Learn more about this purple button"

        >
            Sign In
        </Button>
        <Text style={{textAlign: 'center'}}>Don't have account? Register</Text>
      </View>
    </View>
  );
}