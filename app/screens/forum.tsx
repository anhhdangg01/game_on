// app/screens/forum.tsx

import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import React, { useState ,useEffect } from 'react'
import { TextInput, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AddPostModal from './AddPostModal'
import { forumData, ForumPost } from '../../script/forumData'

export default function Home() {
  const router = useRouter()
  const navigation = useNavigation()
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState<ForumPost[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    setPosts([...forumData])
  }, [forumData])

  const closeModal = () => {
    setIsModalVisible(false)
    setPosts([...forumData])
  }

  const filteredPosts = posts.filter((post) => {
    const query = input.trim().toLowerCase()

    if (query === '') return true

    return (
      post.message.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query) ||
      post.sport.toLowerCase().includes(query) ||
      post.location.toLowerCase().includes(query) ||
      post.needed.toLowerCase().includes(query)
    )
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        {/*<TouchableOpacity onPress={() => router.push('/signup')}>*/}
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forum</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
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
              color="#787878"
            />
            <TextInput
              style={styles.input}
              onChangeText={setInput}
              value={input}
              placeholder="Search"
              placeholderTextColor="#787878"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons
              name="filter"
              size={20}
              color="#787878"
            />
          </TouchableOpacity>
        </View>
      </View>
        
      <ScrollView>
        <View style={styles.field}>
          {filteredPosts.map((post) => (
            <View style={styles.post} key={post.id}>
              <TouchableOpacity onPress={() => router.push('/screens/otherProfile')}>
                <Image
                  source={require('../../assets/images/profile.png')}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
              <View style={styles.textArea}>
                <Text style={styles.label}>{post.message}</Text>
                <Text style={styles.info}>
                  {post.author} @ {post.time} | {post.needed}
                </Text>
                <Text style={styles.location}>
                  {post.sport}{' '}
                  <Ionicons name="location" size={15} color="#787878" />
                  {post.location}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <AddPostModal visible={isModalVisible} onClose={closeModal} />

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
    position: 'absolute'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 23
  },
  info: {
    fontSize: 18
  },
  location: {
    fontSize: 15
  },
  post: {
    padding: 6,
    paddingBottom: 15
  },
  textArea: {
    marginLeft: 100
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
  filterIcon: {
    position: 'absolute',
    paddingTop: 8,
    paddingRight: 3,
    marginLeft: '93%'
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
