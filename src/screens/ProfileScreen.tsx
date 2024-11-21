import React, {useState} from 'react'; 
import { View, StyleSheet, Text, TextInput, Button, Alert} from 'react-native';

const ProfileScreen = () => {
    //User Information
    const [name, setName] = useState('John Doe');   //default name
    const [bio, setBio] = useState('blah blah blah blah blah blah'); //default bio

    //saves the profile
    const handleSave =() =>{
        Alert.alert('Profile Update', 'Name: ${name}\nBio: ${bio}', [
            {text: 'OK', onPress: () => console.log('Profile saved')}, 
        ]); 
    }; 
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit Profile</Text>

            {/* Name Input */}
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}  
              value={name}                  //input value to state
              onChangeText={setName}        //update state on input change
              placeholder='Enter your name'
            />

            {/* Bio Input */}
            <Text style={styles.label}>Edit Bio</Text>
            <TextInput
              style={[styles.input, styles.bioInput]}
              value={bio}                   //input value to state
              onChangeText={setBio}         //update state on input change
              placeholder='What do you want your potential gym partner to know'
              multiline     //allow multiple lines
              numberOfLines={4} //suggest 4 lines of text
            />

            {/* Save Button */}
            <Button title="Save Change" onPress={handleSave} color='#007AFF' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    header: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        textAlign: 'center', 
    },
    label: {
        fontSize: 16, 
        fontWeight: '500', 
        marginBottom: 8, 
        color: '#333', 
    }, 
    input: {
        backgroundColor: 'white', 
        borderColor: '#ccc', 
        borderWidth: 1,
        borderRadius: 8, 
        padding: 10, 
        marginBottom: 20, 
        fontSize: 16,  
    },
    bioInput: {
        height: 100, 
        textAlignVertical: 'top', 
    }, 
}); 


export default ProfileScreen; 

