// app/screens/yourPosts.tsx

import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation , useFocusEffect } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import React, { useState ,useEffect, useCallback } from 'react'
import { Alert, TextInput, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { forumData, ForumPost, CURRENT_USER_ID, deletePost, updatePost } from '../../script/forumData'

export default function YourPosts() {
  const [yourPosts, setYourPosts] = useState<ForumPost[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editedMessage, setEditedMessage] = useState('')
  const [editedTime, setEditedTime] = useState('')
  const [editedLocation, setEditedLocation] = useState('')
  const [editedSport, setEditedSport] = useState('')
  const [editedNeeded, setEditedNeeded] = useState('')
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      const filtered = forumData.filter((post) => post.userId === CURRENT_USER_ID)
      setYourPosts([...filtered])
    }, [])
  )

  const handleDelete = (id: string) => {
    Alert.alert('Delete Post', 'Are you sure?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: () => {
          deletePost(id)
          setYourPosts(forumData.filter((p) => p.userId === CURRENT_USER_ID))
        },
        style: 'destructive',
      },
    ])
  }

  const handleStartEdit = (post: ForumPost) => {
    setEditingId(post.id)
    setEditedMessage(post.message)
    setEditedTime(post.time)
    setEditedLocation(post.location)
    setEditedSport(post.sport)
    setEditedNeeded(post.needed)
  }

  const handleSaveEdit = () => {
    if (editingId) {
      const updated = forumData.find((p) => p.id === editingId)
      if (updated) {
        updatePost({
          ...updated,
          message: editedMessage,
          time: editedTime,
          location: editedLocation,
          sport: editedSport,
          needed: editedNeeded,
        })
        setYourPosts(forumData.filter((p) => p.userId === CURRENT_USER_ID))
      }
      setEditingId(null)
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Posts</Text>
        <View style={{width:28}} />
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {yourPosts.length === 0 ? (
          <Text style={styles.emptyText}>You haven't created any posts yet.</Text>
        ) : (
        yourPosts.map((post) => (
          <View key={post.id} style={styles.card}>
            {editingId === post.id ? (
              <>
                <Text style={styles.label}>Message</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Message"
                  value={editedMessage}
                  onChangeText={setEditedMessage}/>

                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Time"
                  value={editedTime}
                  onChangeText={setEditedTime}/>

                <Text style={styles.label}>Location</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Location"
                  value={editedLocation}
                  onChangeText={setEditedLocation}/>

                <Text style={styles.label}>Sport</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Sport"
                  value={editedSport}
                  onChangeText={setEditedSport}/>

                <Text style={styles.label}>Needed</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Needed"
                  value={editedNeeded}
                  onChangeText={setEditedNeeded}/>

                <TouchableOpacity style={styles.saveBtn} onPress={handleSaveEdit}>
                  <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.message}>{post.message}</Text>
                <Text style={styles.meta}>
                  {post.author} @ {post.time} · {post.location} · {post.sport}
                </Text>
                <Text style={styles.meta}>Needs: {post.needed}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity onPress={() => handleStartEdit(post)}>
                    <Ionicons name="create-outline" size={22} color="#007bff" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(post.id)}>
                    <Ionicons name="trash-outline" size={22} color="#e74c3c" />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
          )
        ))}
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
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
  },
  meta: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    gap: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
  },
  saveBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  label: {
    color: '#777',
    marginTop: 10,
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 40,
  },
})