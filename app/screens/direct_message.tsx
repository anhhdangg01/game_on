// app/screens/direct_message.tsx

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function directMessage() {
  const router = useRouter()
  const navigation = useNavigation()
  const [input, setInput] = useState('')
  const messages = [
    {
      user: "Tennislover123",
      image: null,
      reaction: null,
      date: new Date(2025, 3, 22, 20, 0, 0),
      message: "I'm gonna head home for now. See you later!"
    },
    {
      user: "self",
      image: null,
      reaction: null,
      date: new Date(2025, 3, 22, 20, 3, 0),
      message: "see you soon!"
    },
    {
      user: "Tennislover123",
      image: null,
      reaction: null,
      date: new Date(2025, 3, 23, 18, 34, 0),
      message: "Gonna grab Carls Jr. rq then I'm heading there in 5 minutes"
    },
    {
      user: "Tennislover123",
      image: null,
      reaction: "heart",
      date: new Date(2025, 3, 23, 18, 34, 10),
      message: "Thanks so much for letting me play with yall today!"
    },
    {
      user: "self",
      image: null,
      reaction: null,
      date: new Date(2025, 3, 23, 18, 35, 0),
      message: "np thanks for joining"!
    },
    {
      user: "Tennislover123",
      image: "",
      reaction: null,
      date: new Date(2025, 6, 5, 16, 30, 0),
      message: "hey! I saw your post just now and was wondering if I can join yall?",
    },
    {
      user: "self",
      image: null,
      reaction: "heart",
      date: new Date(2025, 6, 5, 16, 34, 0),
      message: "For sure!"
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/screens/messages')}>
          <Ionicons name="arrow-back" size={28} color="#fff"/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tennislover123</Text>
        <View style={styles.otherIcons}>
          <TouchableOpacity onPress={() => router.push('/nothing')}>
            <Ionicons name="flag" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/nothing')}>
            <Ionicons name="information" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.field}>

        </View>
      </ScrollView>

      <View style={styles.field}>
        <View style={styles.searchSection}>
          <View style={styles.inputWrapper}>
            <Ionicons
              style={styles.cameraIcon}
              name="camera"
              size={50}
              color="#fff"
            />
            <TextInput
              style={styles.input}
              onChangeText={setInput}
              placeholder="Message..."
              placeholderTextColor="#787878"
            />
            <Ionicons
              style={styles.imageIcon}
              name="image"
              size={30}
              color="#787878"
            />
          </View>
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
  otherIcons: {
    flexDirection: 'row'
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
    position: 'absolute'
  },
  message: {

  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    borderRadius: 20,
    paddingLeft: 60,
    paddingRight: 12,
    fontSize: 16,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems:'center'
  },
  inputWrapper: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  cameraIcon: {
    position: 'absolute',
    left: 0,
    width: 51,
    height: 51,
    borderRadius: 50,
    backgroundColor: "#535CFF",
  },
  imageIcon: {
    position: 'absolute',
    marginLeft: "93%"
  }
})
