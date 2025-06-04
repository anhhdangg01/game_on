// app/screens/profile.tsx

import React, { useState } from 'react'
import { SafeAreaView, Image, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function otherProfile() {
      const navigation = useNavigation()

    const onSubmit = () => {
      router.replace('/screens/forum')
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
        <Text style={styles.username}>tennislover134</Text>

        <View style={styles.stars}>
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star" size={20} color="#FFD700" />
          <Ionicons name="star-outline" size={20} color="#FFD700" />
        </View>

        <View style={styles.followInfo}>
          <Text style={styles.followLabel}>123 Followers</Text>
          <Text style={styles.followLabel}> · </Text>
          <Text style={styles.followLabel}>97 Following</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Add Friend</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Message</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Favorite Sport(s)</Text>
          <Text style={styles.sectionValue}>Tennis, Badminton, Soccer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Skill Level</Text>
          <Text style={styles.sectionValue}>Tennis (3 yrs), Badminton (2 yrs), Soccer (5 yrs)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Bio</Text>
          <Text style={styles.sectionValue}>Just a student athlete who loves hitting the court. Always down for a match and meeting new players!</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Recent Friends</Text>
          <View style={styles.friendRow}>
            <Image source={require('../../assets/images/profile.png')} style={styles.friendImage} />
            <Image source={require('../../assets/images/profile.png')} style={styles.friendImage} />
            <Image source={require('../../assets/images/profile.png')} style={styles.friendImage} />
          </View>
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
    justifyContent: 'space-between',
    backgroundColor: '#000',
    marginTop: 40,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  stars: {
    flexDirection: 'row',
    marginTop: 6,
  },
  followInfo: {
    flexDirection: 'row',
    marginTop: 6,
  },
  followLabel: {
    fontSize: 14,
    color: '#555',
  },
  actionButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    width: '85%',
    marginTop: 20,
  },
  sectionLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  sectionValue: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
  },
  friendRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 12,
  },
})