import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../styling/colors';
import users from '../../assets/data/users.js';           //dummy data

type Match = {
  id: string;
  name: string;
  avatar: any; // URL or local path to the user's image
};

const MatchListScreen = () => {
  const navigation = useNavigation<any>();

  // Example matches
  const matches = [
    {
        id: users[0].id,
        name: users[0].name, 
        avatar: { uri: users[0].image }, 
    },
    {
        id: users[1].id,
        name: users[1].name, 
        avatar: { uri: users[1].image }, 
    },
    {
        id: users[2].id,
        name: users[2].name, 
        avatar: { uri: users[2].image }, 
    }
  ]

  const renderMatch = ({ item }: { item: Match }) => (
    <TouchableOpacity
      style={styles.matchContainer}
      onPress={() => navigation.navigate('Chat', { match: item })}
    >
      <Image source={item.avatar} style={styles.avatar} />
      <Text style={styles.matchName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
                <Image
                source={require('../../assets/images/umich-logo.png')}
                style={styles.logo}
                /> 
                <Text style={styles.headerText}>Your Matches</Text>
            </View>

      <FlatList
        data={matches}
        renderItem={renderMatch}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Navigation Bar */}
      <View style={styles.navBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../assets/images/home.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../../assets/images/profile.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.blue, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'relative', 
    width: '100%', 
    height: '13%', 
},
  headerText: {
    fontSize: 20, 
    color: Colors.white,
    fontWeight: 'bold', 
    marginBottom: 20, 
    top: 15, 
    textAlign: 'center', 
  },
  logo:{
    width: 70, 
    height: 40, 
    position: 'absolute',
    left: 16, 
    bottom: 15,
  },
  listContainer: {
    paddingBottom: 20,
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 10,
    backgroundColor: Colors.grey,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  matchName: {
    fontSize: 18,
    color: Colors.black,
  },
  navBar: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    backgroundColor: Colors.blue,
    width: '100%',
    height: '15%', 
    bottom: -30,
    paddingHorizontal: 40, 
  },
  icon: {
    width: 60, 
    height: 60, 
    left: 0, 
    bottom: 15, 
    backgroundColor: Colors.maize, 
  },
});

export default MatchListScreen;
