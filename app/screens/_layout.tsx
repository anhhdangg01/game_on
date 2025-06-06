// app/screens/_layout.tsx

import { Drawer } from 'expo-router/drawer'
import React from 'react'

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false
        }}
      />
      <Drawer.Screen
          name="messages"
          options={{
            title: 'Messages',
            headerShown: false
         }}
      />
      <Drawer.Screen
          name="otherProfile"
          options={{
            title: 'Other Profile (hidden)',
            headerShown: false,
            drawerItemStyle: { display: 'none' }
         }}
      />
      <Drawer.Screen
          name="AddPostModal"
          options={{
            title: 'AddPostModal (hidden)',
            headerShown: false,
            drawerItemStyle: { display: 'none' }
         }}
      />
      <Drawer.Screen
          name="yourPosts"
          options={{
            title: 'Your Posts',
            headerShown: false,
         }}
      />
      {/*}
      <Drawer.Screen
        name="calendar"
        options={{
          title: 'Calendar',
        }}
      />
      <Drawer.Screen
        name="social"
        options={{
          title: 'Social',
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
      <Drawer.Screen
        name="map"
        options={{
          title: 'Map',
        }}
      />
      */}
      <Drawer.Screen
        name="forum"
        options={{
          title: 'Forum',
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="map"
        options={{
          title: 'Map',
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="login"
        options={{
          title: 'Logout',
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="direct_message"
        options={{
          title: "Direct Message",
          headerShown: false,
          drawerItemStyle: {display: 'none'}
        }}
      />
      <Drawer.Screen
        name="FilterScreen"
        options={{
          title: 'Filters (hidden)',
          headerShown: false,
          drawerItemStyle: { display: 'none' }
        }}
      />
    </Drawer>
  )
}
