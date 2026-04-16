import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        headerTitle: '',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="dashboard" />
    </Stack>
  );
}

