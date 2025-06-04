import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const sports = ['All', 'Soccer', 'Basketball', 'Tennis'];
const locations = ['UCI', 'Irvine', 'Newport'];
const skills = ['Beginner', 'Intermediate', 'Advanced'];

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
  const [location, setLocation] = useState('UCI');
  const [skill, setSkill] = useState('Beginner');

  const applyFilters = () => {
    navigation.navigate('forum', { filters: { sport, location, skill } });
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="filter" size={24} />
          <Text style={{ fontSize: 20, marginLeft: 8 }}>Filters</Text>
        </View>
      <TouchableOpacity onPress={() => navigation.navigate('forum', {filters: { sport, location, skill },})}>
          <Ionicons name="close" size={28} color="#333" />
      </TouchableOpacity>
      </View>
      <Dropdown label="Sport" options={sports} value={sport} onChange={setSport} />
      <Dropdown label="Location" options={locations} value={location} onChange={setLocation} />
      <Dropdown label="Skill" options={skills} value={skill} onChange={setSkill} />
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