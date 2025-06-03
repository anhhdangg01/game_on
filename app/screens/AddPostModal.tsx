// app/screens/AddPostModal.tsx

import React, { useState } from 'react'
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native'
import { ForumPost, addPost } from '../../script/forumData'

interface Props {
  visible: boolean
  onClose: () => void
}

export default function AddPostModal({ visible, onClose }: Props) {
  const [message, setMessage] = useState('')
  const [sport, setSport] = useState('')
  const [time, setTime] = useState('')
  const [location, setLocation] = useState('')
  const [needed, setNeeded] = useState('')
  const [author, setAuthor] = useState('Anonymous')

  const handleSubmit = () => {
    const newPost: ForumPost = {
      id: Date.now().toString(),
      author,
      message,
      time,
      location,
      sport,
      needed,
    }
    addPost(newPost)
    setMessage('')
    setSport('')
    setTime('')
    setLocation('')
    setNeeded('')
    onClose()
  }

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          <Text style={styles.heading}>New Forum Post</Text>

          <TextInput
            style={styles.input}
            placeholder="Your username"
            value={author}
            onChangeText={setAuthor}
          />
          <TextInput
            style={styles.input}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
          />
          <TextInput
            style={styles.input}
            placeholder="Sport"
            value={sport}
            onChangeText={setSport}
          />
          <TextInput
            style={styles.input}
            placeholder="Time (e.g. 5:00PM July 5)"
            value={time}
            onChangeText={setTime}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
          <TextInput
            style={styles.input}
            placeholder="Needed (e.g. 2 more / all welcome)"
            value={needed}
            onChangeText={setNeeded}
          />

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  cancelButton: {
    marginRight: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: '#aaa',
  },
  submitButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
})
