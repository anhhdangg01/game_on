// app/screens/forum.tsx

import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { TextInput, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Home() {
  const router = useRouter()
  const navigation = useNavigation()
  const [input, setInput] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        {/*<TouchableOpacity onPress={() => router.push('/signup')}>*/}
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forum</Text>
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
              color="#787878"
            />
            <TextInput
              style={styles.input}
              onChangeText={setInput}
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
          <View style={styles.post}>
            <Image 
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />

            <View style={styles.textArea}>
              <Text style={styles.label}>Basketball @3PM Wednesday, need 4 more!</Text>
              <Text style={styles.info}>HoopDreams227 @ 3:00PM Today | needs 4 more</Text>
              <Text style={styles.location}>Basketball 
                <Ionicons name="location" size={15} color="#787878"/>
                Anteater Recreation Center</Text>
            </View>
          </View>

          <View style={styles.post}>
            <Image 
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
              <View style={styles.textArea}>
                <Text style={styles.label}>Please teach me I'm new!</Text>
                <Text style={styles.info}>FloofyBall123 @ 7:20PM June 9 | all welcome</Text>
                <Text style={styles.location}>Tennis 
                  <Ionicons name="location" size={15} color="#787878"/>
                  Anteater Recreation Center</Text>
              </View>
          </View>

          <View style={styles.post}>
            <Image 
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
              <View style={styles.textArea}>
                <Text style={styles.label}>Singles player looking to duo for a change</Text>
                <Text style={styles.info}>ArcticReptilian1 @ 4:23PM June 15 | needs 3 more</Text>
                <Text style={styles.location}>Pickleball
                  <Ionicons name="location" size={15} color="#787878"/>
                  University Community Park</Text>
              </View>
          </View>


          <View style={styles.post}>
            <Image 
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
              <View style={styles.textArea}>
                <Text style={styles.label}>MIDDLE EARTH BASKETBALL TOURNAMENT</Text>
                <Text style={styles.info}>XxAngelofSoulsxX @ 6:30PM June 30 | all welcome</Text>
                <Text style={styles.location}>Basketball
                  <Ionicons name="location" size={15} color="#787878"/>
                  Middle Earth Basketball Court</Text>
              </View>
          </View>

          <View style={styles.post}>
            <Image 
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
              <View style={styles.textArea}>
                <Text style={styles.label}>Intermediate player looking for singles to play with</Text>
                <Text style={styles.info}>casualcapybara @ 7:55PM July 1 | needs 1 more</Text>
                <Text style={styles.location}>Tennis
                  <Ionicons name="location" size={15} color="#787878"/>
                  University Community Park</Text>
              </View>
          </View>

          <View style={styles.post}>
            <Image 
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
              <View style={styles.textArea}>
                <Text style={styles.label}>Tennis Tourney</Text>
                <Text style={styles.info}>shiningFire1 @ 5:00PM July 5 | all welcome</Text>
                <Text style={styles.location}>Tennis
                  <Ionicons name="location" size={15} color="#787878"/>
                  Anteater Recreation Center</Text>
              </View>
          </View>

          <View style={styles.post}>
            <Image 
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
              <View style={styles.textArea}>
                <Text style={styles.label}>UCI Soccer Social Event</Text>
                <Text style={styles.info}>boredpetrock40 @ 6:00PM July 10 | all welcome</Text>
                <Text style={styles.location}>Soccer
                  <Ionicons name="location" size={15} color="#787878"/>
                  Mesa Court Field</Text>
              </View>
          </View>

          <View style={styles.post}>
            <Image 
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
              <View style={styles.textArea}>
                <Text style={styles.label}>Looking for players in cornerback</Text>
                <Text style={styles.info}>Getdunkedon2 @ 5:30PM July 14 | needs 2 more</Text>
                <Text style={styles.location}>Football
                  <Ionicons name="location" size={15} color="#787878"/>
                  Mesa Court Field</Text>
              </View>
          </View>

          <View style={styles.post}>
            <Image 
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
              <View style={styles.textArea}>
                <Text style={styles.label}>I need Badminton playmates :c</Text>
                <Text style={styles.info}>borbofthewind @ 9:00AM July 15 | all welcome</Text>
                <Text style={styles.location}>Badminton
                  <Ionicons name="location" size={15} color="#787878"/>
                  Anteater Recreation Center</Text>
              </View>
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
