import React, {useState} from 'react'; 
import { View, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity, Image} from 'react-native';
import{ launchImageLibrary} from 'react-native-image-picker';
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
    const [image, setImage] = useState<string | null>(null); //default profile image

    //saves the profile
    const handleSave =() =>{
        Alert.alert(
            'Profile Update', 
            'Name: ${name}\nBio: ${bio} \nHeight: ${height}\nWeight: ${weight}\nAge: ${age}', 
            [
            {text: 'OK', onPress: () => console.log('Profile saved')}, 
        ]); 
    }; 

    const changePhoto = () => {
        launchImageLibrary(
            {
                mediaType: 'photo', 
                quality: 0.8, 
            }, 
            (response) => {
                if(response.didCancel){
                    console.log('User cancelled image picker'); 
                } else if (response.assets && response.assets.length > 0) {
                    const selectedImage = response.assets[0]?.uri; 
                     if (selectedImage){
                        setImage(selectedImage);     //update profile picture
                     }  else{
                        console.error("No image URI returned from picker"); 
                     } 
                } else if (response.errorMessage) {
                    console.error("ImagePicker Error: ", response.errorMessage);
                }
            }
        )
    }
    
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

            {/* Form Section */}
            <View style={styles.formContainer}>
                {/* Profile Image */}
                <TouchableOpacity style={styles.profileImageContainer}>
                    <Image
                        source={require('../../assets/images/profile.png')} // Placeholder profile image
                        style={styles.profileImage}
                    />
                    <Text style={styles.changePhotoText}>Change Photo</Text>
                </TouchableOpacity>
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

                {/* Height Input */}
                <Text style={styles.label}>Height</Text>
                <TextInput
                  style={styles.input}
                  value={height}
                  onChangeText={setHeight}
                  placeholder="Enter your height (e.g. 5'6)"
                />

                {/* Weight Input */}
                <Text style={styles.label}>Weight</Text>
                <TextInput
                  style={styles.input}
                  value={weight}
                  onChangeText={setWeight}
                  placeholder="Enter your weight (e.g. 130 lbs)"
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
        padding: 15, 
    },
    profileImageContainer:{
        alignItems: 'center', 
    },
    profileImage: {
        width: 80, 
        height: 80, 
        borderRadius: 50, 
        backgroundColor: Colors.grey, 
    },
    changePhotoText: {
        color: Colors.blue, 
        fontSize: 14, 
        fontWeight: '500', 
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
        padding: 8, 
        marginBottom: 20, 
        fontSize: 16,  
    },
    goalsInput: {
        height: 50, 
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
        paddingHorizontal: 40, 
        bottom: -30, 
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

