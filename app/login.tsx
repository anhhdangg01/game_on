// app/login/login.tsx

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login (not yet implemented)</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/signup')}>
        <Text style={styles.buttonText}>Go to Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#666',
  },

  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})