// app/screens/direct_message.tsx

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useRouter, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

type ChatMessage = {
  user: string
  image: string | null
  reaction: string | null
  date: Date
  message: string
}

export default function directMessage() {
  const router = useRouter()
  const navigation = useNavigation()
  const [input, setInput] = useState('')

  const { user } = useLocalSearchParams<{ user: string }>()
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      user: 'Tennislover123',
      image: null,
      reaction: null,
      date: new Date(2025, 3, 22, 20, 0, 0),
      message: "I'm gonna head home for now. See you later!",
    },
    {
      user: 'self',
      image: null,
      reaction: null,
      date: new Date(2025, 3, 22, 20, 3, 0),
      message: 'See you soon!',
    },
    {
      user: 'Tennislover123',
      image: null,
      reaction: null,
      date: new Date(2025, 3, 23, 18, 34, 0),
      message:
        "Gonna grab Carls Jr. rq then I'm heading there in 5 minutes",
    },
    {
      user: 'Tennislover123',
      image: null,
      reaction: 'heart',
      date: new Date(2025, 3, 23, 18, 34, 10),
      message: 'Thanks so much for letting me play with yall today!',
    },
    {
      user: 'self',
      image: null,
      reaction: null,
      date: new Date(2025, 3, 23, 18, 35, 0),
      message: 'np thanks for joining',
    },
    {
      user: 'Tennislover123',
      image: null,
      reaction: null,
      date: new Date(2025, 6, 5, 16, 30, 0),
      message:
        'hey! I saw your post just now and was wondering if I can join yall?',
    },
    {
      user: 'self',
      image: null,
      reaction: 'heart',
      date: new Date(2025, 6, 5, 16, 34, 0),
      message: 'For sure!',
    },
    {
      user: 'Tennislover123',
      image: null,
      reaction: null,
      date: new Date(2025, 6, 5, 16, 40, 0),
      message: 'Awesome, see you there in 5!',
    },
    {
      user: 'self',
      image: null,
      reaction: null,
      date: new Date(2025, 6, 5, 16, 42, 0),
      message: 'On my way!',
    },
  ])

  const loadMessageBubble = (msg: ChatMessage, idx: number) => {
    const isSelf = msg.user === 'self'
    return (
      <View
        key={idx}
        style={[
          styles.chatBubble,
          isSelf ? styles.bubbleRight : styles.bubbleLeft,
        ]}>
        <Text style={styles.chatText}>{msg.message}</Text>
        <Text style={styles.chatDate}>
          {msg.date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    )
  }

  const handleMessage = () => {
    if (input.trim() === '') return

    const newMsg: ChatMessage = {
      user: 'self',
      image: null,
      reaction: null,
      date: new Date(),
      message: input.trim(),
    }
    setMessages((prev) => [...prev, newMsg])
    setInput('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/screens/messages')}>
          <Ionicons name="arrow-back" size={28} color="#fff"/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{user ?? 'Chat'}</Text>
        <View style={styles.otherIcons}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="flag" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="information" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.messagesContainer}>
          {messages.map(loadMessageBubble)}
        </ScrollView>
      </TouchableWithoutFeedback>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.inputSection}>
          <View style={styles.inputWrapper}>
            <Ionicons
              style={styles.cameraIcon}
              name="camera"
              size={30}
              color="#787878"/>
            <TextInput
              style={styles.input}
              onChangeText={setInput}
              value={input}
              placeholder="Message..."
              placeholderTextColor="#787878"
              returnKeyType="send"
              onSubmitEditing={handleMessage}/>
            <TouchableOpacity
              onPress={handleMessage}
              style={styles.sendButton}>
              <Ionicons
                name="send"
                size={28}
                color="#535CFF"/>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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
  otherIcons: {
    flexDirection: 'row'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    borderRadius: 20,
    paddingLeft: 55,
    paddingRight: 50,
    fontSize: 16,
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  inputWrapper: {
    position: 'relative',
    height: 40,
    justifyContent: 'center',
    flex: 1,
  },
  cameraIcon: {
    position: 'absolute',
    left: 12,
    top: 5,
    zIndex: 1,
  },
  imageIcon: {
    position: 'absolute',
    marginLeft: "93%"
  },
  chatBubble: { // for both user + other
    maxWidth: '75%',
    borderRadius: 16,
    padding: 12,
    marginVertical: 4,
  },
  bubbleLeft: { // other message
    backgroundColor: '#eee',
    alignSelf: 'flex-start',
  },
  bubbleRight: { // user message
    backgroundColor: '#535CFF',
    alignSelf: 'flex-end',
  },
  chatText: {
    fontSize: 16,
    color: '#000',
  },
  messagesContainer: {
    paddingHorizontal: 30,
    paddingTop: 16,
    paddingBottom: 8,
  },
  sendButton: {
    position: 'absolute',
    right: 8,
    top: 6,
  },
  chatDate: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
    textAlign: 'right',
  },
  })
