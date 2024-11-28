import React, {useState} from 'react'; 
import {View, Text, StyleSheet, TextInput, Image, Button, Alert, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from'@react-navigation/native'; 
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation'; // Import your types
import { Colors } from '../styling/colors'; 
import {firebaseAuth} from '../firebase/firebaseConfig'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'; 

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>; 

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [loading, setLoading] = useState(false); 
    const auth = firebaseAuth
    const navigation = useNavigation<LoginScreenNavigationProp>(); 

    const validateEmail = (email:string): boolean => {
        //Check if the email ends with @umich.edu
        return email.endsWith('@umich.edu'); 
    }

    const signIn = async () => {
        if (!validateEmail(email)) {
            Alert.alert('Invalid Email', 'Please use a valid @umich.edu email address.');
            return;
        }

        setLoading(true); 
        try{
            const response = await signInWithEmailAndPassword(auth, email, password); 
            console.log(response);
            navigation.navigate('Home'); 
        } catch (error: any) {
            console.log(error); 
            Alert.alert('Sign in failed: ' + error.errorMessage)
        } finally {
            setLoading(false); 
        }
    }

    const signUp = async () => {
        if (!validateEmail(email)) {
            Alert.alert('Invalid Email', 'Please use a valid @umich.edu email address.');
            return;
        }

        setLoading(true); 
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password); 
            console.log(response);
            Alert.alert('Success', 'Check your emails!'); 
            navigation.navigate('Profile'); 
        } catch (error: any) {
            console.log(error); 
            Alert.alert('Sign in failed: ' + error.errorMessage)
        } finally {
            setLoading(false); 
        }
    }

    return (
        <View style={styles.container}>
            <Image
              source={require('../../assets/images/umich-logo.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>
                Welcome to the University of Michigan's Gympal App!
            </Text>
            <Text style={styles.subtitle}>
                Login and find you new gym partner!
            </Text>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput 
                    value={email} 
                    style={styles.input} 
                    placeholder="Email" 
                    autoCapitalize="none" 
                    onChangeText={(text) => setEmail(text)}>
                </TextInput>
                <TextInput 
                    secureTextEntry={true}
                    value={password}
                    style={styles.input} 
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={(text) => setPassword(text)}>  
                </TextInput>
                { loading ? <ActivityIndicator size="large" color="#0000ff" />
                : <>
                <Button title="Login" onPress={signIn}/>
                <Button title="Sign Up" onPress={signUp} />
                </>}
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        backgroundColor: Colors.blue, 

    }, 
    logo:{
        width: 70, 
        height: 40, 
        position: 'absolute',
        left: 16, 
        top: 30,
      },
    title: {
        bottom: 100, 
        fontSize: 30, 
        color: Colors.maize, 
        textAlign: 'center', 
    }, 
    subtitle: {
        bottom: 60,
        fontSize: 15, 
        textAlign: 'center', 
        color: Colors.maize, 
    },
    input: {
        marginHorizontal: 20, 
        marginVertical: 4, 
        height: 50, 
        borderWidth: 1, 
        borderRadius: 4, 
        padding: 10, 
        backgroundColor: Colors.grey, 
    }, 
})

export default Login; 