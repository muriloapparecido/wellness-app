import React, {useState} from 'react'; 
import { View, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Colors } from '../styling/colors'; 



const ProfileScreen = () => {
    //Navigation
    const navigation = useNavigation<any>(); 
    //User Information
    const [name, setName] = useState('John Doe');   //default name
    const [bio, setBio] = useState('I want to get into shape'); //default bio
    const [height, setHeight] = useState("5'6");   //default height
    const [weight, setWeight] = useState('130 lbs') //default weight
    const [age, setAge] = useState('20');   //default age

    //saves the profile
    const handleSave =() =>{
        Alert.alert(
            'Profile Update', 
            'Name: ${name}\nBio: ${bio} \nHeight: ${height}\nWeight: ${weight}\nAge: ${age}', 
            [
            {text: 'OK', onPress: () => console.log('Profile saved')}, 
        ]); 
    }; 
    
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                source={require('../../assets/images/umich-logo.png')}
                style={styles.logo}
                />
                <Text style={styles.headerText}>Edit Profile</Text>   
            </View>

            <View style={styles.formContainer}>
                {/* Name Input */}
                <Text style={styles.label}>Name</Text>
                <TextInput
                style={styles.input}  
                value={name}                  //input value to state
                onChangeText={setName}        //update state on input change
                placeholder='Enter your name'
                />

                {/* Goals Input */}
                <Text style={styles.label}>Edit Goals</Text>
                <TextInput
                style={[styles.input, styles.goalsInput]}
                value={bio}                   //input value to state
                onChangeText={setBio}         //update state on input change
                placeholder='What are your fitness goals'
                multiline     //allow multiple lines
                numberOfLines={4} //suggest 4 lines of text
                />

                {/* Save Button */}
                <Button title="Save Change" onPress={handleSave} color='#007AFF' />
            </View>

            {/* Navigation Bar */}
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../assets/images/home.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Image source={require('../../assets/images/chat.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>   
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.grey,
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
    formContainer: {
        flex: 1, 
        padding: 20, 
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
    goalsInput: {
        height: 100, 
        textAlignVertical: 'top', 
    }, 
    navBar: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: Colors.blue,
        width: '100%',
        height: '15%', 
        position: 'absolute', 
        bottom: 0,
        paddingHorizontal: 40, 
      },
    logo:{
        width: 70, 
        height: 40, 
        position: 'absolute',
        left: 16, 
        bottom: 15,
    },
      icon: {
        width: 60, 
        height: 60, 
        left: 0, 
        bottom: 15, 
        backgroundColor: Colors.maize, 
      },
}); 


export default ProfileScreen; 

