// app/screens/_layout.tsx

import { Drawer } from 'expo-router/drawer'
import { otherProfile } from './otherProfile'
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
            title: 'Other Profile (in progress)',
            headerShown: false
         }}
      />

      {/*}
      <Drawer.Screen
        name="otherProfile"
        component={otherProfile}
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: false
        }}
      />
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
        name="login"
        options={{
          title: 'Logout',
          headerShown: false
        }}
      />
    </Drawer>
  )
}
