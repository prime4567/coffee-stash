import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const [username, onChangeUsername] = React.useState('Username Input');
  const [password, onChangePassword] = React.useState('Password Input');
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Image
        source={require('../assets/CoffeeStashLogo1.png')}
      />
      <TextInput
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        onChangeText={onChangePassword}
        value={password}
      />
      <Button
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        title="Sign In"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}