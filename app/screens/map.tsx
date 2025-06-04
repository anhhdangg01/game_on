import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'

export default function MapScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Enable location access to use the map.')
        return
      }

      const loc = await Location.getCurrentPositionAsync({})
      setLocation(loc.coords)
      
    })()
  }, [])

  if (!location) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Map</Text>
        <View style={{ width: 28 }} />
        </View>
    
        <MapView
        style={styles.map}
        initialRegion={{
            latitude: 33.644466014206564,
            longitude: -117.8366916914015,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        >
        <Marker
            coordinate={{ latitude: 33.644466014206564, longitude: -117.8366916914015 }}
            title="Middle Earth Basketball Court"
            description="6 NEEDED"
        />
        </MapView>
    </View>
    )
      
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',  // or '#fff' if you want white background
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop: 40,
      },
    map: {
      flex: 1,
      backgroundColor: '#fff',  // match container background
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })