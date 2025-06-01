// app/forum.tsx

import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function Home() {
  const router = useRouter()
  const navigation = useNavigation()
  const [input, setInput] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forum</Text>
        <View style={{width:28}} />
      </View>

      <View style={styles.field}>
        <View style={styles.searchSection}>
          <Ionicons style={styles.searchIcon} name="search" size={28} color="#787878" />
        <Ionicons style={styles.filterIcon} name="filter" size={28} color="#787878" />
          <TextInput
            style={styles.input}
            onChangeText={setInput}
            placeholder="Search"
          />
        </View>
      </View>
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
  field: {
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 30,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    paddingLeft: 10,
    paddingTop: 3
  },
  filterIcon: {
    position: 'absolute',
    paddingTop: 10,
    paddingRight: 3,
    marginLeft: '93%'
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    marginTop: 4,
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 50
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
