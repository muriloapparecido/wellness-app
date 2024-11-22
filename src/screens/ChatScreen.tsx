import React, {useState} from 'react'; 
import { View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import { Colors } from '../styling/colors';


const ChatScreen = ({route} : { route: any}) => {
    const navigation = useNavigation<any>(); 
    const { match } = route.params; 

    //state to hold messages
    const [messages, setMessages] = useState([
        {id: '1', text: 'Hey there!', sender: 'other' },
        {id: '2', text: 'Hi! How are you', sender: 'me'},
    ]);
    
    const [newMessage, setNewMessage] = useState('');

    // Handle sending a message
    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {id: Date.now().toString(), text: newMessage, sender: 'me'},
            ]);
        }
    };

    // Render a single chat message
    type Message = {
        id: string, 
        text: string, 
        sender: string, 
    }

    const renderMessage = ({ item } : { item: Message}) => (
        <View 
        style={[
            styles.messageContainer, 
            item.sender == 'me' ? styles.myMessage : styles.otherMessage, 
        ]}
        >
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return(
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image 
                    source={match.avatar}
                    style={styles.logo}
                />
                <Text style={styles.headerText}>{match.name}</Text>
            </View>
            
            {/* Chat Messges List */}
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.chatContainer}
            />

            {/* Message Input Box */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Type a message..."
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Image 
                        source={require('../../assets/images/send.png')}
                        style={styles.sendIcon}
                    />
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
    chatContainer: {
        padding: 10,
    }, 
    messageContainer: {
        marginVertical: 5, 
        padding: 10, 
        borderRadius: 10, 
        maxWidth: '75%',
    },
    myMessage: {
        backgroundColor: Colors.maize, 
        alignSelf: 'flex-end', 
    },
    otherMessage: {
        backgroundColor: Colors.darkGrey, 
        alignSelf: 'flex-start', 
    },
    messageText: {
        fontSize: 16, 
        color: Colors.black, 
    }, 
    inputContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 10, 
        borderTopWidth: 1, 
        borderTopColor: Colors.grey, 
    },
    input: {
        flex: 1, 
        height: 40, 
        borderColor: Colors.grey, 
        borderWidth: 1, 
        borderRadius: 20, 
        paddingHorizontal: 10, 
        backgroundColor: Colors.white, 
    },
    sendButton: {
        marginLeft: 10, 
        backgroundColor: Colors.blue, 
        borderRadius: 20, 
        padding: 10,
    },
    sendIcon: {
        width: 20, 
        height: 20, 
        tintColor: Colors.darkGrey, 
        right: 1, 
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


export default ChatScreen; 

