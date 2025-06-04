// app/screens/messages.tsx

import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { TouchableWithoutFeedback, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Message, messagesData } from '../../script/messageData'

const allContacts = Array.from(
    new Set(messagesData.map((m) => m.sender))
)

export default function Messages() {
  const router = useRouter()
  const navigation = useNavigation()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [showModal, setShowModal] = useState(false)
  const [newMessageText, setNewMessageText] = useState('')
  const [newRecipient, setNewRecipient] = useState('')
  const [contactQuery, setContactQuery] = useState('')

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

  const filteredContacts = allContacts.filter((contact) => {
    const query = contactQuery.trim().toLowerCase()
    if (query === '') return true
    return contact.toLowerCase().includes(query)
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity onPress={() => setShowModal(true)}>
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
      <Modal visible={showModal} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
        <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <TextInput
              placeholder="Search contacts"
              style={[styles.input, { marginBottom: 12 }]}
              value={contactQuery}
              onChangeText={setContactQuery}/>
            <ScrollView style={{ maxHeight: 250, marginBottom: 16 }}>
              {filteredContacts.map((contact) => (
                <TouchableOpacity
                  key={contact}
                  style={styles.contactRow}
                  onPress={() => {
                    setNewRecipient(contact)
                    setShowModal(false)
                    setNewRecipient('')
                    setContactQuery('')
                    router.push({
                      pathname: '/screens/direct_message',
                      params: { user: contact },
                    })
                  }}>
                  <Text style={styles.contactName}>{contact}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Text style={{ color: 'red' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  contactName: {
    fontSize: 18,
  },

})