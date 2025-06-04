// app/screens/messages.tsx

import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import React, { useState , useEffect } from 'react'
import { Modal, TextInput, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Message, messagesData } from '../../script/messageData'

export default function Messages() {
  const router = useRouter()
  const navigation = useNavigation()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    setMessages([...messagesData])
  }, [messagesData])

  const filteredMessages = messages.filter((msg) => {
    const query = input.trim().toLowerCase()
    if (query === '') return true

    return (
      msg.sender.toLowerCase().includes(query) ||
      msg.preview.toLowerCase().includes(query)
    )
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity onPress={() => router.push('/nothing')}>
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.field}>
        <View style={styles.searchSection}>
          <View style={styles.inputWrapper}>
            <Ionicons
              style={styles.searchIcon}
              name="search"
              size={20}
              color="#787878"/>
            <TextInput
              style={styles.input}
              onChangeText={setInput}
              value={input}
              placeholder="Search"
              placeholderTextColor="#787878"
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.field}>
          {filteredMessages.map((msg) => {
            const rowContent = (
              <View style={styles.post} key={msg.id}>
                <Image
                  source={require('../../assets/images/profile.png')}
                  style={styles.profileImage}/>
                <View style={styles.textArea}>
                  <Text style={styles.label}>{msg.sender}</Text>
                  <Text style={styles.info}>{msg.preview}</Text>
                </View>
              </View>
            )
            if (msg.sender === 'Tennislover123') {
              return (
                <TouchableOpacity
                  key={msg.id}
                  onPress={() => router.push('/screens/direct_message')}>
                  {rowContent}
                </TouchableOpacity>
              )
            }
            return rowContent
          })}
        </View>
      </ScrollView>
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
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginTop: 6,
    position: 'absolute',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  info: {
    fontSize: 18,
    marginTop: 4,
  },
  post: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    marginLeft: 100,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    borderRadius: 20,
    paddingLeft: 40,
    paddingRight: 12,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
})