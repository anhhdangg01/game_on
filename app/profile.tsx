// app/profile.tsx

import React, { useState } from 'react'
import { SafeAreaView, Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function SignUp() {
      const router = useRouter()
      const navigation = useNavigation()
      const [email, setEmail] = useState('')
      const [username, setUsername] = useState('')
      const [zipcode, setZipCode] = useState('')
      const [locationR, setRadius] = useState('')
      const [favSport, setFavSport] = useState('')
      const [skillLevel, setLevel] = useState('')
      const [dob, setDOB] = useState('')

    const onSubmit = () => {
      router.replace('/forum')
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/*<TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>*/}
        <TouchableOpacity onPress={() => router.push('/signup')}>
        <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{width:28}} />
      </View>

      <Image
        source={require('../assets/images/profile.png')}
        style={styles.profileImage}
      />

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

      <View style={[styles.field, styles.row]}>
        <View style={styles.half}>
          <Text style={styles.label}>Zip Code</Text>
          <TextInput
            style={styles.input}
            value={zipcode}
            onChangeText={setZipCode}
          />
        </View>
        <View style={styles.half}>
          <Text style={styles.label}>Location Radius</Text>
          <TextInput
            style={styles.input}
            value={locationR}
            onChangeText={setRadius}
          />
        </View>
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

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    marginTop: 40,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  field: {
    marginBottom: 16,
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    marginTop: 4,
  },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    half: {
      width: '48%',
    },
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
})
