// app/login/signup.tsx

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter, Link } from 'expo-router'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

export default function SignUp() {
      const router = useRouter()
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirm, setConfirm] = useState('')
      const [agreed, setAgreed] = useState(false)

    const onSubmit = () => {
      if (password === confirm && agreed) {
        router.replace('/home')
      } else {
      }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Game-On</Text>
      <Text style={styles.pageTitle}>Sign Up</Text>

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

      <View style={styles.field}>
        <Text>Re-enter Password:</Text>
        <TextInput
          style={styles.input}
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry
        />
      </View>

      <View style={styles.termsContainer}>
        <TouchableOpacity
          style={styles.terms}
          onPress={() => setAgreed(!agreed)}
        >
          {agreed
            ? <AntDesign name="checksquare" size={24} />
            : <AntDesign name="minussquareo" size={24} />
          }
          <Text style={styles.link}>Agree to T&C</Text>
        </TouchableOpacity>
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
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Link href="/login" style={styles.signinLink}>
        or click to Sign In
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
  termsContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
