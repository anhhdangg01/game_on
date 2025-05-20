// app/_layout.tsx

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React from 'react'

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="signup"
        options={{ title: 'Sign Up' }}
      />
      <Stack.Screen
        name="login"
        options={{ title: 'Sign In' }}
      />
      <Stack.Screen
        name="home"
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="+not-found"
        options={{ title: 'Oops!' }}
      />
    </Stack>
  )
}
