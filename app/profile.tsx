// app/login/signup.tsx

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter, Link } from 'expo-router'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

export default function SignUp() {
      const router = useRouter()
      const [email, setEmail] = useState('')
      const [username, setUsername] = useState('')
      const [zipcode, setZipCode] = useState('')
      const [locationR, setRadius] = useState('')
      const [favSport, setFavSport] = useState('')
      const [skillLevel, setLevel] = useState('')
      const [dob, setDOB] = useState('')

    const onSubmit = () => {
      router.replace('/home')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Profile</Text>

      <View style={styles.field}>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

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
        <Text>Zip Code</Text>
        <TextInput
          style={styles.input}
          value={zipcode}
          onChangeText={setZipCode}
        />
      </View>

      <View style={styles.field}>
        <Text>Favorite Sport</Text>
        <TextInput
          style={styles.input}
          value={favSport}
          onChangeText={setFavSport}
        />
      </View>

      <View style={styles.field}>
        <Text>Skill Level</Text>
        <TextInput
          style={styles.input}
          value={skillLevel}
          onChangeText={setLevel}
        />
      </View>

     <View style={styles.field}>
        <Text>Date of Birth</Text>
        <TextInput
          style={styles.input}
          value={dob}
          onChangeText={setDOB}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: -50,
    marginBottom: 140,
  },
  field: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    marginTop: 4,
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
})
