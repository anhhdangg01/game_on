// app/screens/FilterScreen.tsx

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TextInput, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const sports = ['All', 'Soccer', 'Basketball', 'Tennis'];
const radii = ['5 miles', '10 miles', '25 miles', '50 miles']
const skills = ['All', 'Beginner', 'Intermediate', 'Advanced']

const Dropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dropdown} onPress={() => setOpen(!open)}>
        <Text>{value}</Text>
        <Ionicons name="chevron-down" size={20} />
      </TouchableOpacity>
      {open && (
        <View style={styles.dropdownOptions}>
          {options.map((option) => (
            <TouchableOpacity key={option} style={styles.option} onPress={() => { onChange(option); setOpen(false); }}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default function FilterScreen({ route }) {
  const navigation = useNavigation();
  const [sport, setSport] = useState('All');
  const [skill, setSkill] = useState('All');
  const [zipCode, setZipCode] = useState('')
  const [radius, setRadius] = useState('5 miles')

  const applyFilters = () => {
    navigation.navigate('forum', { filters: { sport, skill, zipCode, radius } });
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="filter" size={24} />
          <Text style={{ fontSize: 20, marginLeft: 8 }}>Filters</Text>
        </View>
      <TouchableOpacity onPress={() => navigation.navigate('forum', {filters: { sport, skill, zipCode, radius },})}>
          <Ionicons name="close" size={28} color="#333" />
      </TouchableOpacity>
      </View>
      <Dropdown label="Sport" options={sports} value={sport} onChange={setSport} />
      <Dropdown label="Skill" options={skills} value={skill} onChange={setSkill} />
      <View style={{ marginBottom: 24 }}>
        <Text style={styles.label}>Zip Code</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 92897"
          value={zipCode}
          onChangeText={setZipCode}
          keyboardType="number-pad"
        />
      </View>
      <Dropdown label="Search Radius" options={radii} value={radius} onChange={setRadius} />
      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  dropdown: {
    backgroundColor: '#eee',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownOptions: {
    backgroundColor: '#eee',
    borderRadius: 8,
    marginTop: 4,
  },
  option: {
    padding: 12,
  },
  applyButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    marginTop: 24,
  },
}); 