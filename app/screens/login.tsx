// app/screens/login.tsx

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter, Link } from 'expo-router'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

export default function Login() {
      const router = useRouter()
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirm, setConfirm] = useState('')
      const [agreed, setAgreed] = useState(false)

    const onSubmit = () => {
      router.replace('/screens/forum')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Game-On</Text>
      <Text style={styles.pageTitle}>Login</Text>

      <View style={styles.field}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.field}>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.social}>
        <TouchableOpacity>
          <FontAwesome name="google" size={32} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="facebook-square" size={32} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="logo-apple" size={32} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Link href="../signup" style={styles.signinLink}>
        or click to Register
      </Link>

      <Text style={styles.footer}>
        Made by Special Valuable Group (SVG)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  appName: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 4,
  },
  pageTitle: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 24,
  },
  field: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    marginTop: 4,
  },
  link: {
    color: '#0066cc',
    textDecorationLine: 'underline',
    marginLeft: 8,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signinLink: {
    textAlign: 'center',
    color: '#0066cc',
    marginBottom: 24,
  },
  footer: {
    textAlign: 'center',
    color: '#999',
  },
})
